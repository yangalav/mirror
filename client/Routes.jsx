import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from './screens/Splash';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Splash} />
    </div>
  </Router>
  );
