import React from 'react';
import { Route, Switch } from "react-router-dom";
import { HomePage, Page404 } from "pages";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={Page404} />
  </Switch>
)

export default AppRouter;