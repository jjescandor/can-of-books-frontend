import React from 'react';
import { Navbar, Button, Container, Form } from 'react-bootstrap';
import { FormControl, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { IoIosBookmarks } from 'react-icons/io';
import { IoMdHome, IoIosPeople } from 'react-icons/io';
// import { IoPersonCircleSharp } from 'react-icons/io5';
import './Header.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      keyword: null,
      isCreate: null,
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ keyword: event.target.value });
    this.props.getSearchResultArr(this.state.keyword);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getSearchResultArr(this.state.keyword);
  };

  handleCreate = () => {
    this.setState({ isCreate: true });
    this.props.showCreateModal();
  };

  render() {
    return (
      <Navbar bg='medium' className='nav' expand={false}>
        <Container fluid>
          <Navbar.Brand href='#'>
            <Link to='/'>
              <IoIosBookmarks className='logo' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' id='toggle' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
          >
            <Offcanvas.Header id='drawerH' closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='drawerB'>
              <Form className='d-flex' onSubmit={this.handleSubmit}>
                <FormControl
                  type='search'
                  placeholder='Search books here'
                  className='me-4'
                  aria-label='Search'
                  size='md'
                  onChange={this.handleChange}
                />
                <Button type='submit' variant='outline-success' id='searchBtn'>
                  Search
                </Button>
              </Form>
              <Button
                size='lg'
                variant='outline-success'
                id='createButton'
                onClick={this.handleCreate}
              >
                Create a Book
              </Button>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='#action1'>
                  <Link to='/' className='nav-link'>
                    <h6>
                      <IoMdHome />
                      &nbsp;&nbsp; Home
                    </h6>
                  </Link>
                </Nav.Link>
                <Nav.Link href='#action2'>
                  <Link to='/About' className='nav-link'>
                    <h6>
                      <IoIosPeople />
                      &nbsp;&nbsp; About
                    </h6>
                  </Link>
                </Nav.Link>
                {/* May not need since we now have login with auth0  */}
                {/* <Nav.Link href='#action3'>
                  <Link to='/Signup' className='nav-link'>
                    <h6>
                      <IoIosPersonAdd />
                      &nbsp;&nbsp; Signup
                    </h6>
                  </Link>
                </Nav.Link> */}
                <Nav.Link href='#action4'>
                  <LoginButton />
                </Nav.Link>
                <Nav.Link>
                  <LogoutButton />
                </Nav.Link>

                {/* Future addtion */}
                {/* <Nav.Link href='#action5'>
                  <Link to='/Profile' className='nav-link'>
                    <IoPersonCircleSharp />
                    &nbsp;&nbsp; Profile
                  </Link>
                </Nav.Link> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
