import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useLocation } from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>
          React<i className='fab-fa-react'></i>
        </h1>
        <div className='menu-icon' onClick={this.handleClick}></div>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

// return (
//   <>
//     <Navbar>
//       <LinkContainer
//         to='/'
//         className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
//       >
//         <Navbar.Brand>Home</Navbar.Brand>
//       </LinkContainer>
//       <LinkContainer to='/DataTranslator'>
//         <Nav.Link>Data Translator</Nav.Link>
//       </LinkContainer>
//       <LinkContainer to='/DataScientist'>
//         <Nav.Link>Data Scientist</Nav.Link>
//       </LinkContainer>
//       <LinkContainer to='/DataEngineer'>
//         <Nav.Link>Data Engineer</Nav.Link>
//       </LinkContainer>
//       <LinkContainer to='/DataAnalyst'>
//         <Nav.Link>Data Analyst</Nav.Link>
//       </LinkContainer>
//     </Navbar>
//   </>
// );

export default Navbar;
