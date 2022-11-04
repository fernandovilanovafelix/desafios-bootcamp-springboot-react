import MainImage from "assets/images/car-banner.png";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-card-banner-container">
          <div className="home-banner-image-container">
            <img src={MainImage} alt="Banner do carro" />
          </div>
          <div className="home-banner-content-container">
            <h1>O carro perfeito para você</h1>

            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>

        <div className="home-card-content-container">
          <button className="btn">
            <h6>Ver Catálogo</h6>
          </button>

          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
