
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Navigator from './components/Navigator';
import Login from './pages/Login';
import Account from "./pages/Account";


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


  if (!user) return <Login onLogin={setUser} location={location} setLocation={setLocation}/>;

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
            <Account location={location} user={user} setLocation={setLocation} ></Account>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
