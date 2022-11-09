import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import Homepage from './components/home/Homepage';
import Explore from './components/explore/Explore';
import Navigator from './components/Navigator';
import Login from './components/login/Login';
import Account from "./components/account/Account";


function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({})

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


  if (!user) {
    
    return (
      <>
        <Navbar bg='primary' variant='dark'>
            <Container>
              <Navbar.Brand href="/">Postr</Navbar.Brand>
            </Container>
          </Navbar>
        <Login onLogin={setUser} location={location} setLocation={setLocation}/>;
      </>
    )
  }

   else {return (
    <BrowserRouter>
      <div className="App" >
        <Navigator setUser={setUser}></Navigator>
        <Switch>
          <Route exact path="/">
            <Homepage location={location} user={user} setLocation={setLocation} ></Homepage>
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
