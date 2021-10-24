import React from 'react';
import { Container,  Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark" >
      <Container >
      <Navbar.Brand to="/home">Clasic Car Reparing</Navbar.Brand>
      <div className="na">
      <Link className="me-3" to="/home">Home</Link>
      <Link  className="me-3"  to="/services">Service</Link>
      <Link  className="me-3" to="/experts">Experts</Link>
      <Link  className="me-3" to="/manageBook">Manage Book</Link>
      <Link  className="me-3" to="/about">About</Link>
      <Link  className="me-3"  to="/login">Login</Link>
       <Link className="me-3"  to="/singUp">Sing-Up</Link> 
      </div>
       
      </Container>
      
      </Navbar>
        </div>
    );
};

export default Header;