import './styles.css';

import PieChartCard from '../pie-chart-card';
import { FilterData, PieChartConfig, SalesByGender, SalesSummaryData } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/requests';
import { useEffect, useMemo, useState } from 'react';
import { buildSalesByGender } from './helper';
import { formatPrice } from '../../utils/formatter';

type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  sum: 0,
  avg: 0,
  count: 0,
  max: 0,
  min: 0
};

function SalesByGenderComponent({ filterData }: Props) {
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const [salesbyGender, setSalesbyGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales by date');
      });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGender(response.data);
        setSalesbyGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by date');
      });
  }, [params]);

  return (
    <div className="sales-by-gender-container base-card">
      <div className="sales-by-gender-quantity-container">
        <h1 className="sales-by-gender-quantity">{formatPrice(summary.sum)}</h1>
        <span className="sales-by-gender-quantity-label">Total de vendas</span>
      </div>
      <div className="sales-by-gender-chart">
        <PieChartCard labels={salesbyGender?.labels} name="" series={salesbyGender?.series} />
      </div>
    </div>
  );
}

export default SalesByGenderComponent;
