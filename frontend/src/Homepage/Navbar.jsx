import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation({ isHomePage }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) { 
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]);

  const handleNavLinkScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar
      className={`navbar ${isHomePage ? 'home-navbar' : ''} ${scrolled ? 'scrolled' : ''}`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'Black', fontWeight: 'bold' }}>
        <div onClick={() => handleNavLinkScroll('homePage')}>
          <img 
            src="/images/vha.jpg" 
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Brand Logo"
            style={{ marginRight: '10px' }}
          />
          Vasanth Academy
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'transparent' }} />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={() => handleNavLinkScroll('homePage')}
              style={{ fontSize: '18px' }} 
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => handleNavLinkScroll('aboutPage')}
              style={{ fontSize: '18px' }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/courses" 
              style={{ fontSize: '18px' }}
            >
              Courses
            </Nav.Link>

            <NavDropdown 
              title="Login/Register" 
              id="basic-nav-dropdown"
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
