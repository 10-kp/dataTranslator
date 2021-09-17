import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar>
        <LinkContainer to='/'>
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <LinkContainer to='/DataTranslator'>
          <Nav.Link>Data Translator</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/DataScientist'>
          <Nav.Link>Data Scientist</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/DataEngineer'>
          <Nav.Link>Data Engineer</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/UxDesign'>
          <Nav.Link>UX Designers</Nav.Link>
        </LinkContainer>
      </Navbar>
    </>
  );
}

export default NavBar;
