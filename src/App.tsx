import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import FeedListPage from "./pages/Feed/FeedListPage";
import FeedWrite from "./pages/Feed/FeedWrite";
import FeedDetail from "./pages/Feed/FeedDetail";
import GlobalStyles from "./styles/GlobalStyles";
import SignupPage from "./pages/Auth/SignupPage";
import AuthPage from "./pages/Auth/AuthPage";

const App = () => {
  // axios.post("/user/login", { email: "hsk0094@gmail.com", password: "lala" });
  // axios.delete("/post/delete");
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
