import Pagination from 'components/Pagination';
import EmployeeCard from 'components/EmployeeCard';
import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Employee } from 'types/employee';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { hasAnyRoles } from 'util/auth';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Employee>>();

  const [controlComponentsData, setControlComponentsData] =
  useState<ControlComponentsData>({
    activePage: 0
  });

  const getEmployees = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/employees',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber
    });
  };

  return (
    <>
      {hasAnyRoles(['ROLE_ADMIN']) && (
        <Link to="/admin/employees/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>
      )}

      <div className="row">
        {page?.content.map((employee) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={employee.id}>
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </div>

      <Pagination
        forcePage={page?.number}
        pageCount={page ? page?.totalPages : 0}
        range={4}
        onChange={handlePageChange}
      />
    </>
  );
};

export default List;
