import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand href="#home">Clasic Car Reparing</Navbar.Brand>
      <Nav className="m-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#services">Service</Nav.Link>
      <Nav.Link href="#experts">Experts</Nav.Link>
     
      
      </Nav>
      <Link to="/login">Login</Link>
      </Container>
  </Navbar>
        </div>
    );
};

export default Header;