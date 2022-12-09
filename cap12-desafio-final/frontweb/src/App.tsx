import './App.css';

import { useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import SalesByGenderComponent from './components/sales-by-gender';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <div className="App">
      <>
        <Header />
        <div className="app-container">
          <Filter onFilterChange={onFilterChange} />
          <SalesByGenderComponent filterData={filterData} />
        </div>
      </>
    </div>
  );
}

export default App;
