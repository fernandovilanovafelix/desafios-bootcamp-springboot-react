import "./styles.css";

import ProductComponent from "components/ProductComponent";
import SearchComponent from "components/SearchComponent";

const Catalog = () => {
  return (
    <>
      <div className="catalog-container">
        <div className="catalog-search-container">
          <SearchComponent />
        </div>

        <div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <ProductComponent />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <ProductComponent />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <ProductComponent />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <ProductComponent />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <ProductComponent />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <ProductComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
