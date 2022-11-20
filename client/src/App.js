import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import Sidebar from "./components/sidebar/Sidebar";
import Homepage from './components/home/Homepage';
import Explore from './components/explore/Explore';
import Login from './components/login/Login';
import Account from "./components/account/Account";
import './App.css';
import Endbar from "./components/endbar/Endbar";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({})
  const [posts, setPosts] = useState([])
  const minMatch = useMediaQuery('(min-width: 800px)')
  const maxMatch = useMediaQuery('(max-width: 1000px)')

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((result) => {
          setUser(result.user)
          setLocation(result.location)
        });
      }
    });
  }, []);

  const layoutState = maxMatch ? (minMatch ? "medium" : "min") : 'max'


  if (!user) {
    
    return (
      <div className="Login">
        <Login onLogin={setUser} location={location} setLocation={setLocation}/>
      </div>
    )
  }

   else {return (
    <BrowserRouter>
      <div className="App" >
        <Sidebar location={location} user={user} setUser={setUser} posts={posts} setPosts={setPosts} layout={layoutState}/>
        <Switch>
          <Route exact path="/">
            <Homepage location={location} user={user} setLocation={setLocation} posts={posts} setPosts={setPosts} />
            <Endbar layout={layoutState} />
          </Route>
          <Route path="/explore">
            <Explore user={user}></Explore>
          </Route>
          <Route exact path="/account">
            <Account user_id={user.id} ></Account>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
