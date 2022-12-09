import './styles.css';

import { useEffect, useState } from 'react';
import { FilterData, Store } from '../../types';
import { makeRequest } from '../../utils/requests';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStores] = useState<Store[]>([]);
  const [selectedStore, setSelectedStore] = useState<string>();

  useEffect(() => {
    makeRequest
      .get<Store[]>('/stores')
      .then((response) => {
        setStores(response.data);
      })
      .catch(() => {
        console.error('Error to fetch stores');
      });
  }, []);

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setSelectedStore(value);
    onFilterChange({ storeId: value });
  };

  return (
    <div className="filter-container base-card">
      <select className="filter-input" onChange={onChangeStore} value={selectedStore}>
        <option value="">Selecione uma loja</option>
        {stores &&
          stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Filter;
