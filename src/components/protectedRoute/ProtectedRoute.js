import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component,  authenticated, userToken, ...rest}) => {
  return <Route render={(props) => (authenticated ? <Component {...props} userToken={userToken} /> : <Redirect to="/login" />)} {...rest} />;
};

export default ProtectedRoute;
