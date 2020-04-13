import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { tempSetUser, checkAsync } from "./reducers/user";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const loadUser = () => {
  try {
    const user = localStorage.getItem("user");
    if (!user) return;

    store.dispatch(tempSetUser(JSON.parse(user!)));
    store.dispatch(checkAsync.request());
  } catch (error) {}
};

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
