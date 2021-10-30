import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import { LoginScreem } from "../pages/auth/Login/LoginScreem";
import { RegisterScreem } from "../pages/auth/Register/RegisterScreem";
export const AuthRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreem} />
        <Route exact path="/auth/register" component={RegisterScreem} />
        <Redirect to="/auth/register"/>
      </Switch>
    </Router>
  );
};
