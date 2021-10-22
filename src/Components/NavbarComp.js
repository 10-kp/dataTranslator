import React from 'react';
import logo from '../Pics/logo.png';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavbarComp() {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <Navbar
            bg='warning'
            variant='light'
            expand='lg'
            className='fixed-top'
          >
            <Navbar.Brand href='/'>
              <img src={logo} alt='brand' width='25px' height='25px' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/DataTranslator'>Data Translator</Nav.Link>
                <Nav.Link href='/DataAnalytics'>Data Analytics</Nav.Link>

                <NavDropdown
                  title='Data Analytics Team'
                  id='basic-nav-dropdown'
                >
                  <NavDropdown.Item href='/DataScientist'>
                    Data Scientist
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/DataEngineer'>
                    Data Engineer
                  </NavDropdown.Item>
                  <NavDropdown.Item href='/DataAnalyst'>
                    Data Analyst
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

// import {
//   Nav,
//   Navbar,
//   NavItem,
//   Dropdown,
//   DropdownItem,
//   DropdownToggle,
//   DropdownMenu,
//   NavLink,
// } from 'reactstrap';

// const NavbarComp = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <Navbar fixed='top' expand='md'>
//       <Nav pills>
//         <NavItem>
//           <NavLink href='/' active>
//             Home
//           </NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href='/DataTranslator'>Data Translator</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href='/DataAnalytics'>Data Analytics</NavLink>
//         </NavItem>

//         <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
//           <DropdownToggle nav caret>
//             Data Analytics Team
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem href='/DataScientist'>Data Scientist</DropdownItem>
//             <DropdownItem href='/DataEngineer'>Data Engineer</DropdownItem>
//             <DropdownItem href='/DataAnalyst'>Data Analyst </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </Nav>
//     </Navbar>
//   );
// };

export default NavbarComp;
