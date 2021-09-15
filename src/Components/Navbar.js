import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <div className='App container py-3'>
      <Navbar collapseOnSelect bg='light' expand='md' className='mb-3'>
        <LinkContainer to='/'>
          <Navbar.Brand className='font-weight-bold text-muted'>
            Home
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to='/Data'>
              <Nav.Link>Data Translator</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
  //   <Navbar>
  //     <Container>
  //       <Navbar href='/'></Navbar>

  //       <Nav.Item>
  //         <Nav.Link as={Link} to='/Home'></Nav.Link>Home
  //       </Nav.Item>

  //       <Nav.Item>Data Translator</Nav.Item>
  //       <Nav.Item>Data Scientists</Nav.Item>
  //       <Nav.Item>Data Engineers</Nav.Item>
  //     </Container>
  //   </Navbar>
  // );
}

export default NavBar;
