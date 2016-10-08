import React from "react";
import store from './store/configureStore';
import { routes } from "./routes";
import { Router, browserHistory } from "react-router";
import { Provider } from 'react-redux';
import { Resolver } from "react-resolver";
import "./styles/base.css";

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//
const initialState = {};

window.webappStart = () => {
  Resolver.render(
    () => <Provider store={store}><Router>{routes}</Router></Provider>,
    document.querySelector(".js-content")
  );
};
