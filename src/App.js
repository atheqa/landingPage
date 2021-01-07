import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FrontpageView } from './views'; /* 
import SecureRoute from './SecureRoute'; */

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FrontpageView} />
        {/* 
        <SecureRoute path="/apply" component={ApplicationView} /> */}
      </Switch>
    </Router>
  );
}
