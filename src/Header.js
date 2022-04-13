import React from 'react';
import { Navbar, Button, Container, Form } from 'react-bootstrap';
import { FormControl, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { IoIosBookmarks } from 'react-icons/io';
import { IoMdHome, IoIosPeople } from 'react-icons/io';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
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
              {!this.props.auth0.isAuthenticated ?
                (<Nav.Link href='#action4'>
                  <LoginButton />
                </Nav.Link>)
                :
                (<>
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
                    <Nav.Link>
                      <LogoutButton />
                    </Nav.Link>
                  </Nav>
                  <Profile className="profile" />
                </>)}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
