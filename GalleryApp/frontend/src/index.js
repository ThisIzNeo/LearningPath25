import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from 'redux-thunk';

import reducers from "./reducers";
import App from "./App";

// Create store with middleware
const store = createStore(
  reducers,
  compose(applyMiddleware(thunk))
);

// Create and render root
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
