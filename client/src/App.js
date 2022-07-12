import logo from './logo.svg';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Homepage from './pages/Homepage';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Login from './pages/Login';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
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
