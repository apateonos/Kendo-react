import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DrawerRouterContainer from './DrawerRouterContainer';
import { Home, Product } from '../pages/index';

export default () => {
  return (
    <Router>
      <DrawerRouterContainer>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/product" component={Product} />
        </Switch>
      </DrawerRouterContainer>
    </Router>
  )
}