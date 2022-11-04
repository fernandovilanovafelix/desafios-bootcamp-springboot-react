import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavbarComponent from "components/NavbarComponent";
import Home from "pages/Home";
import Catalog from "pages/Catalog";

const Routes = () => (
  <BrowserRouter>
    <NavbarComponent />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;