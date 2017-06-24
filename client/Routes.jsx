import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
  );
