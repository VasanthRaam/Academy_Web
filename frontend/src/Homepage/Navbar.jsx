import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation({isHomePage}) {
  return (
    <Navbar 
    className={`navbar ${isHomePage && 'home-navbar'}`}
      expand="lg" 
      // variant="light" 
      style={{ backgroundColor: 'transparent' }} 
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'Black', fontWeight: 'bold' }}>
          <img 
            src="/images/vha.jpg" 
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

            <NavDropdown 
              title="Login/Register" 
              
              id="basic-nav-dropdown" 
              // style={{ color: 'black', fontSize: '18px' }}
              // style={{ color: 'black !important', fontSize: '18px' }}

            >
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
