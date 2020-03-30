import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginPage from "../components/LoginPage";
import DashBoardPage from "../components/DashBoardPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute path="/dashboard" component={DashBoardPage} />
      <PublicRoute path="/" component={LoginPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
