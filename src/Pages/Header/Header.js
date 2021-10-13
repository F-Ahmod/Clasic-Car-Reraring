import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark" >
      <Container>
      <Navbar.Brand href="#home">Clasic Car Reparing</Navbar.Brand>
      <Nav className="m-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#services">Service</Nav.Link>
      <Nav.Link href="#experts">Experts</Nav.Link>
      </Nav>
       
      </Container>
      <Link to="/about">About</Link> <br />
       <Link className="ms-2 me-3" to="/login">Login</Link>
  </Navbar>
        </div>
    );
};

export default Header;