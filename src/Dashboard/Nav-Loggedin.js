import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {
  return (
    <Navbar 
      expand="lg" 
      variant="light" 
      style={{ backgroundColor: 'transparent' }} // Full transparency
    >
      <Container>
        {/* Brand name and logo */}
        <Navbar.Brand as={Link} to="/" style={{ color: 'Black', fontWeight: 'bold' }}>
          <img
            src="/images/vha.jpg" // Replace with your logo path
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Brand Logo"
            style={{ marginRight: '10px' }}
          />
          Vasanth Academy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'transparent' }} />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              style={{ color: 'black', fontSize: '18px' }} // Links are white text
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              style={{ color: 'black', fontSize: '18px' }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/courses" 
              style={{ color: 'black', fontSize: '18px' }}
            >
              Courses
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/" 
              style={{ color: 'black', fontSize: '18px' }}
            >
              Logout
            </Nav.Link>

            {/* <NavDropdown 
              title="Login/Register" 
              
              id="basic-nav-dropdown" 
              // style={{ color: 'black', fontSize: '18px' }}
              // style={{ color: 'black !important', fontSize: '18px' }}

            >
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">Register</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
