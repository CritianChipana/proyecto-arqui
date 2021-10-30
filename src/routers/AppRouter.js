import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreem } from "../pages/auth/Login/LoginScreem";
import { RegisterScreem } from "../pages/auth/Register/RegisterScreem";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AuthRouter } from "./AuthRouter";
export const AppRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};
