import React from 'react';
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap';

// core components

function NavbarComp() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setBodyClick(false);
          }}
        />
      ) : null}
      <Navbar color='primary' expand='lg'>
        <Container>
          <NavbarBrand href='/' onClick={(e) => e.preventDefault()}>
            Data Translator
          </NavbarBrand>
          <button
            className='navbar-toggler'
            id='navbarNavDropdown'
            type='button'
            onClick={() => {
              document.documentElement.classList.toggle('nav-open');
              setBodyClick(true);
            }}
          >
            <span className='navbar-toggler-icon' />
          </button>
          <UncontrolledCollapse navbar toggler='#navbarNavDropdown'>
            <Nav navbar>
              <NavItem className='active'>
                <NavLink href='/' onClick={(e) => e.preventDefault()}>
                  Home <span className='sr-only'>(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/DataTranslator'
                  onClick={(e) => e.preventDefault()}
                >
                  Data Translator
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='/DataAnalytics'
                  onClick={(e) => e.preventDefault()}
                >
                  Data Analytics
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color='default'
                  data-toggle='dropdown'
                  href='#pablo'
                  id='navbarDropdownMenuLink'
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  Data Analytics Team
                </DropdownToggle>
                <DropdownMenu aria-labelledby='navbarDropdownMenuLink'>
                  <DropdownItem
                    href='/DataScientist'
                    onClick={(e) => e.preventDefault()}
                  >
                    Data Scientist
                  </DropdownItem>
                  <DropdownItem
                    href='/DataEngineer'
                    onClick={(e) => e.preventDefault()}
                  >
                    Data Engineer
                  </DropdownItem>
                  <DropdownItem
                    href='/DataAnalyst'
                    onClick={(e) => e.preventDefault()}
                  >
                    Data Analyst
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
