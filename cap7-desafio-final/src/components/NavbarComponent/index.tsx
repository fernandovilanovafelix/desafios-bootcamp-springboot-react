import "bootstrap/js/src/collapse.js";
import "./styles.css";

import { Link, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carros-top-navbar"
          aria-controls="carros-top-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="carros-top-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li className="main-menu-item">
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
