import React from 'react';
import API from '../utils/API.js';
import { Route, Redirect } from 'react-router-dom';
import { ROUTE_LOGIN } from '../constants/index.js';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (API.isAuth() === false) {
        return <Redirect to={ROUTE_LOGIN} />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);
