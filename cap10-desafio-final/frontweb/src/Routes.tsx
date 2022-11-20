import Navbar from "components/Navbar";
import Login from "pages/Login";
import { Route, Router, Switch } from "react-router-dom";
import history from "util/history";
import List from "pages/movies/List";
import MovieDetails from "pages/movies/MovieDetails";

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/movies" exact>
        <List />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
