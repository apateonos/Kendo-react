import React from 'react';
import ReactDOM from "react-dom";
import '@progress/kendo-theme-default/dist/all.css';
import Route from './route/route';
import { Provider } from 'react-redux';
import store from './store/store';
import './asset/styles.css';

ReactDOM.render ( 
  <Provider store={store}>
    <Route />
  </Provider>, 
  document.getElementById("root")
);