export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type FilterData = {
  storeId?: string;
};

export type Store = {
  id: number;
  name: string;
};

export type SalesSummaryData = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
