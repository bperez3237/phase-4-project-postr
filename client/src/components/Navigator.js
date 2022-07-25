import React from "react";
import {Button, Container, Nav,  Navbar} from 'react-bootstrap'

function Navigator({setUser}) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return (
        <Navbar bg='primary' variant='dark'>
          <Container>
            <Navbar.Brand href="/">Postr</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/explore">Explore</Nav.Link>
              <Nav.Link href="/account">Account</Nav.Link>
              <Button className='justify-content-end' variant="light" onClick={handleLogoutClick}>Logout</Button>
            </Nav>
          </Container>
        </Navbar>
    )


}

export default Navigator;