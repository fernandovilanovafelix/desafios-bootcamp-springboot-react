import { Gender, SalesByGender } from '../../types';

const formatGender = (gender: Gender) => {
  const textByGender = {
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    OTHER: 'Outros'
  };

  return textByGender[gender];
};

export const buildSalesByGender = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => formatGender(sale.gender as Gender));
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
