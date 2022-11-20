import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import MovieFilter, { MovieFilterData } from "components/MovieFilter";
import Pagination from "components/Pagination";
import PrivateRoute from "components/PrivateRoute";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";

import "./styles.css";

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <PrivateRoute path="/movies">
      <div className="movie-list-container">
      <MovieFilter onSubmitFilter={handleSubmitFilter} />

        <div className="row movie-list-movies-container">
          {page?.content.map((movie) => (
            <div className="col-sm-6 col-xl-3" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
        </div>

        <div className="row movie-list-pagination-container">
          <Pagination
            pageCount={page ? page?.totalPages : 0}
            range={3}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default List;
