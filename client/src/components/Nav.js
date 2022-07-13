import React from "react";
import {Link, NavLink} from 'react-router-dom'
import {Button, Navbar} from 'react-bootstrap'

function Nav({setUser}) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return (
        <Navbar>
            <Button variant="primary" onClick={handleLogoutClick}>Logout</Button>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
        </Navbar>
    )


}

export default Nav;