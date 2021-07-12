import React from "react";
import {appMessages,appConstants} from '../themes/constants'
import { Link, Route, Switch,Redirect } from "react-router-dom";
import PrivateRoute from "./protectedRoute";
import { ForgotPassword } from '../components/auth/forgotPassword'
import { Login } from '../components/auth/login'
import routeConfig from "./routeConfig";
import cl from '../utils/cl'
import ResetPassword from "../components/auth/resetPassword";
import BrockenLink from '../customComponents/brockenLink'
const Setup=()=> {
    cl('(Setup file)',localStorage)
    return (
          <Switch>
            <Route
                exact
                path="/"
                render={() => (localStorage.token ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Redirect to="/login" />
                ))}
            />
            <Route path="/login" render={() => (localStorage.token ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Login />
                ))} />
            <Route path="/forgot-password" render={() => (localStorage.token ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <ForgotPassword />
                ))} />
            <Route path="/resetPassword" component={ResetPassword} />
            {routeConfig.map((route, i) => (
            <PrivateRoute exact={route.exact} key={route} path={route.path} component={route.component} />
            ))}
            <Route path="*" render={() => <BrockenLink 
            status="404"
            reason={appMessages.wrongPage} 
            reasonDetails={appMessages.tryAgain} 
            buttonTitle={localStorage.token ? appConstants.home :appConstants.login} 
            goto="/"
            />} />
        </Switch>
    );
}

export default Setup