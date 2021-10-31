import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, Button} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './../../utilities/75801-coco-travel-graphic-design-luggage-free-frame.png';
import './header.css'

const Header = () => {
  const {user, handlelogout} = useAuth()
    const activeStyle = {
        color: 'green'
    }
    return (
        <Navbar bg="light" expand={false} className="px-md-5" sticky="top">
    <Container fluid className="px-0">
    <Navbar.Brand href="#" className="ms-sm-2 pe-sm-0">
    <div className="d-flex justify-content-center aling-items-center">
     <img src={logo} alt="" width="30px" />
     <h2 className="hidden logoName ms-2 d-flex aling-items-center">Crimson Travel</h2>
    </div>
    </Navbar.Brand>
    <div className="d-flex mx-3">
    <NavLink to="/home" activeStyle={{color :'green'}}><i className="fas fa-home fs-3"></i></NavLink>
    <NavLink to="/service" activeStyle={activeStyle}><i className="fas fa-umbrella-beach fs-3 ms-5"></i></NavLink>
    <NavLink to="/cart" activeStyle={activeStyle}><i class="fas fa-play fs-3 ms-5"></i></NavLink>
    <NavLink to="/travels" activeStyle={activeStyle}><i className="fas fa-plane-departure fs-3 ms-5"></i></NavLink>
    </div>
    <Navbar.Toggle aria-controls="offcanvasNavbar" className="me-md-2 border-0 bg-light" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">
        {
          user.photoURL ? <img src={user.photoURL} alt="" width="40px" className="photo"/> : user.email && <i className="fas fa-user-circle fs-3 unperson text-danger"></i>
        }
        {
          user.displayName &&  <span className="ms-2 me-3 username">{user.displayName}</span>
        }
        <div>
        {
          user.email &&  <p className="me-3 useremail fs-7">{user.email}</p>
        }
        </div>
        <div className="mt-4">
        {
          user.displayName ? <Button variant="danger mt-0" className="logout-btn" onClick={handlelogout}><i class="fas fa-sign-out-alt me-2 text-light"></i>Log out</Button> : <Link to="/login">
          <Button variant="success"><i className="fas fa-sign-in-alt me-2 px-sm-0 text-light"></i>Login Now</Button>
          </Link>
        }
        </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavDropdown title="Admin panel" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="/manageOrder">manage order</NavDropdown.Item>
            <NavDropdown.Item href="#action4"></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    );
};

export default Header;