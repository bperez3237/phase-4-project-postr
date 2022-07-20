import React from "react";
import { useHistory } from "react-router-dom";
import {Button, Container, Nav,  Navbar} from 'react-bootstrap'

function Navigator({setUser}) {
    const history = useHistory()
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            history.push('/')
          }
        });
      }

    return (
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="/">Postr</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/explore">Explore</Nav.Link>
              <Button className='justify-content-end' variant="light" onClick={handleLogoutClick}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>
    )


}

export default Navigator;