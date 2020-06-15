import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/pages/dashboard';
import Login from './components/pages/login/index.js';
import Signup from './components/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './scss/app.scss';
import Nav from './components/navigation/index.js';
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_DASHBOARD,
  ROUTE_STUDENT,
} from './constants';
import StudentPage from './components/pages/student';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="App-content">
        <Switch>
          <PrivateRoute exact path={ROUTE_HOME} component={Dashboard} />
          <Route exact path={ROUTE_LOGIN} component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute path={ROUTE_DASHBOARD} component={Dashboard} />
          <PrivateRoute path={ROUTE_STUDENT} component={StudentPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
