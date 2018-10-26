import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import {fetchProducts} from "./actions/product_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchProducts = fetchProducts;

  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
