import React, { Component } from 'react';
import classnames from 'classnames';
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap';

export default class NavbarComp extends Component {
  render() {
    return (
      <Navbar bg='dark' variant={'dark'} expand='lg'>
        <Container>
          <Navbar href='/'></Navbar>
          <Navbar aria-controls='basic-navbar-nav' />
          <Navbar id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav href='/'>Home</Nav>
              <Nav href='/DataTranslator'>Data Translator</Nav>
              <Nav href='/DataAnalytics'>Data Analytics</Nav>
              {/* <Nav.Link href='/DataEngineer'>2</Nav.Link>
                  <Nav.Link href='/DataAnalyst'>3</Nav.Link> */}
              <Nav title='Data Team' id='basic-nav-dropdown'>
                <Nav href='/DataScientist'>Data Scientist</Nav>
                <Nav href='DataEngineer'>Data Engineer</Nav>
                <Nav href='DataAnalyst'>Data Analyst</Nav>
                {/* <NavDropdown.Divider />
                    <NavDropdown.Item href='#action/3.4'>
                      Separated link
                    </NavDropdown.Item> */}
              </Nav>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    );
  }
}
