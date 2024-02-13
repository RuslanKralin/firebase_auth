import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./App.css";
import { store } from "store";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  // </BrowserRouter>
);
