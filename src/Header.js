import React from 'react';
import { Navbar, Button, Container, Form } from 'react-bootstrap';
import { FormControl, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from "react-router-dom";
import { IoIosBookmarks } from "react-icons/io";
import { IoMdHome, IoIosPeople, IoIosPersonAdd } from "react-icons/io";
import { IoLogInSharp } from "react-icons/io5";



import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
  }
  render() {
    return (
      <Navbar bg="medium" className='nav' expand={false}>
        <Container fluid>
          <Navbar.Brand href="#"><IoIosBookmarks className='logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" id='toggle' />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header className='drawer' closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='drawer'>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search books here"
                  className="me-4"
                  aria-label="Search"
                  size='md'
                />
                <Button variant="outline-success" id='searchBtn'>Search</Button>
              </Form>
              <Button size='lg' variant="outline-success" id="createButton" onClick={this.props.showCreateModal}>Create a Book</Button>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" ><Link to="/" className="nav-link"><h6><IoMdHome />  Home</h6></Link></Nav.Link>
                <Nav.Link href="#action2" ><Link to="/About" className="nav-link"><h6><IoIosPeople />  About</h6></Link></Nav.Link>
                <Nav.Link href="#action1" ><Link to="/Signup" className="nav-link"><h6><IoIosPersonAdd />  Signup</h6></Link></Nav.Link>
                <Nav.Link href="#action2" ><Link to="/Login" className="nav-link"><h6><IoLogInSharp />  Login</h6></Link></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
