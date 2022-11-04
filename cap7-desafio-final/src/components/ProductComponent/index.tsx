import "./styles.css";

import ProductImg from "assets/images/product.png";

const ProductComponent = () => {
  return (
    <div className="product-card">
      <div className="product-content-container">
        <img src={ProductImg} alt="Nome do produto" />
        <h2>Audi Supra TT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="product-button-container">
        <button className="btn">
          <h6>Comprar</h6>
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
