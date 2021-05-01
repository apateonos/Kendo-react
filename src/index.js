import React from 'react';
import ReactDOM from "react-dom";
import '@progress/kendo-theme-default/dist/all.css';
import App from './containers/base/app';
import { Provider } from 'react-redux';
import store from './store/store';
import './asset/styles.css';

ReactDOM.render ( 
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);