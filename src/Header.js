import React from 'react';
import { Dropdown, Navbar, NavItem, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>

        <NavItem>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to='/About' className='nav-link'>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Dropdown>
            <Dropdown.Toggle>
              <FaShoppingCart color='#fff' fontSize='25px' />
              <Badge>5</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Your cart is empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </NavItem>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default Header;
