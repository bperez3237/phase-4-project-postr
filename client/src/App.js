import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./components/home/Homepage";
import Explore from "./components/explore/Explore";
import Login from "./components/login/Login";
import Settings from "./components/account/Settings";
import "./App.css";
import Endbar from "./components/endbar/Endbar";
import useMediaQuery from "./hooks/useMediaQuery";
import Profile from "./components/profiles/Profile";
import useGet from "./hooks/useGet";
import FullPost from "./components/post/FullPost";
import { LoginContext } from "./context/LoginContext";

function App() {
  const [posts, setPosts] = useState([]);

  const minMatch = useMediaQuery("(min-width: 960px)");
  const maxMatch = useMediaQuery("(max-width: 1260px)");

  const { data: login, setData: setLogin } = useGet("/me");

  const layoutState = maxMatch ? (minMatch ? "medium" : "min") : "max";

  if (!login.user) {
    return (
      <div className="Login">
        <Login loginState={login} setLoginState={setLogin} />
      </div>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <LoginContext.Provider value={{ login, setLogin }}>
            <Sidebar posts={posts} setPosts={setPosts} layout={layoutState} />
            <Switch>
              <Route exact path="/">
                <Homepage login={login} posts={posts} setPosts={setPosts} />
                <Endbar layout={layoutState} />
              </Route>
              <Route path="/full-post/:post_id">
                <FullPost login={login} />
                <Endbar layout={layoutState} />
              </Route>
              <Route path="/explore">
                <Explore login={login}></Explore>
              </Route>
              <Route path="/profile/:username">
                <Profile />
                <Endbar layout={layoutState} />
              </Route>
              <Route path="/settings">
                <Settings login={login} setLogin={setLogin}></Settings>
              </Route>
            </Switch>
          </LoginContext.Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
