import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Desafio Github API</h1>
      <p>Bootcamp Spring React - DevSuperior</p>
      <Link to="/githubsearch">
        <button className="btn start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
