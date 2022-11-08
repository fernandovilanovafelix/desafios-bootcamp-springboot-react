import PrivateRoute from "components/PrivateRoute";
import { Link } from "react-router-dom";

import "./styles.css";

const List = () => {
  return (
    <PrivateRoute path="/movies">
      <div className="movie-list-container">
        <h1>Tela listagem de filmes</h1>
        <Link to="/movies/1">
          <p>Acessar /movies/1</p>
        </Link>
        <Link to="/movies/2">
          <p>Acessar /movies/2</p>
        </Link>
      </div>
    </PrivateRoute>
  );
};

export default List;
