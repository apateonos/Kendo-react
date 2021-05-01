import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import DrawerRouterContainer from './DrawerRouterContainer';
import { Home, Chart, Detail } from '../pages/index';

export default () => {
  return (
    <Router>
      <DrawerRouterContainer>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/chart" component={Chart} />
          <Route exact path = "/detail" component={Detail} />
        </Switch>
      </DrawerRouterContainer>
    </Router>
  )
}