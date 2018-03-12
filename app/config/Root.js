import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppContainer from '../containers/AppContainer/AppContainer';
import LoginContainer from '../containers/LoginContainer/LoginContainer';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppContainer} exact />
        <Route path="/login" component={LoginContainer} exact />
      </Switch>
    </Router>
  );
};

export default Root;

