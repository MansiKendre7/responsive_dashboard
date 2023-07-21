// src/NavBar.js
import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import './App.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
       
        
          <Button variant="primary" className="buy-now-button">
            Buy Now
          </Button>
       
      </Container>
    </Navbar>
  );
};

export default NavBar;
