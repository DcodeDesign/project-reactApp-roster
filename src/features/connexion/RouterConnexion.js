import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import RouterDashboard from "../dashboard/RouterDashboard";
import Login from "./login/Login";
import Register from "./register/Register";
export function RouterConnexion(props) {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/register" component={Register}/>
                    <ProtectedRoute authenticated={props.authenticated} path="/dashboard" component={RouterDashboard} />
                    <Route authenticated={props.authenticated} path="/" component={Login}/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        </Router>
    );

}
