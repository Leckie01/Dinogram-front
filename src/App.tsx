import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import FeedListPage from "./pages/Feed/FeedListPage";
import FeedWrite from "./pages/Feed/FeedWrite";
import FeedDetail from "./pages/Feed/FeedDetail";
import GlobalStyles from "./styles/GlobalStyles";
import AuthPage from "./pages/Auth/AuthPage";
import rootReducer from "./reducers";

const App = () => {
  const store = createStore(rootReducer, composeWithDevTools());

  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Route path="/" exact component={FeedListPage} />
        <Route path="/write" exact component={FeedWrite} />
        <Route path="/detail/:id" exact component={FeedDetail} />
        <Route path="/login" exact component={AuthPage} />
        <Route path="/signup" exact component={AuthPage} />
      </BrowserRouter>
    </Provider>
  );
};
export default App;
