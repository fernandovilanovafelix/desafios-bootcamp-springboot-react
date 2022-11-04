import Navbar from "components/Navbar";
import GitHubSearch from "pages/GitHubSearch";
import Home from "pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/githubsearch">
        <GitHubSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
