import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/pages/dashboard';
import Login from './components/pages/login/index.js';
import Signup from './components/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './scss/app.scss';
import Nav from './components/navigation/index.js';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div className="App-content">
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
