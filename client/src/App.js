
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Navigator from './components/Navigator';
import Login from './pages/Login';


function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState({})

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);


  if (!user) return <Login onLogin={setUser} location={location} setLocation={setLocation}/>;

   else {return (
    <BrowserRouter>
      <div className="App" >
        <Navigator setUser={setUser}></Navigator>
        <Switch>
          <Route path="/">
            <Homepage location={location} username={user.name}></Homepage>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
