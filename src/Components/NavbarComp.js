import React, { Component } from 'react';
import {
  Navbar,
  Container,
  Nav,
  // NavDropdown,
  // Form,
  // FormControl,
  // Button,
} from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg='dark' variant={'dark'} expand='lg'>
            <Container>
              <Navbar.Brand href='/'></Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href='/DataTranslator'>Data Translator</Nav.Link>
                  <Nav.Link href='/DataScientist'>Data Scientist</Nav.Link>
                  <Nav.Link href='/DataEngineer'>Data Engineer</Nav.Link>
                  <Nav.Link href='/DataAnalyst'>Data Analyst</Nav.Link>
                  {/* <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#action/3.1'>
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.2'>
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#action/3.3'>
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.4'>
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Router>
    );
  }
}
