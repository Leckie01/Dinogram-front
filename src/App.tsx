import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import FeedListPage from "./pages/Feed/FeedListPage";
import FeedWrite from "./pages/Feed/FeedWrite";
import FeedDetail from "./pages/Feed/FeedDetail";
import GlobalStyles from "./styles/GlobalStyles";
import AuthPage from "./pages/Auth/AuthPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Route path="/" exact component={FeedListPage} />
        <Route path="/write" exact component={FeedWrite} />
        <Route path="/detail/:id" exact component={FeedDetail} />
        <Route path="/login" exact component={AuthPage} />
        <Route path="/signup" exact component={AuthPage} />
      </BrowserRouter>
    </>
  );
};
export default App;
