import React from "react";
import ReactDOM from "react-dom";
import "./views/styles/index.css";
import App from "./views/App";
import { Provider } from "react-redux";
import { configureStore } from "./application/store";
import services from "./services";

ReactDOM.render(
  <Provider store={configureStore(services)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
