import logo from './logo.svg';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Login from './pages/Login';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return <Login onLogin={setUser} />;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/homepage">
            <Homepage></Homepage>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
