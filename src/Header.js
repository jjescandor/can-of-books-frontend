import React from 'react';
import { Navbar, NavItem, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navBar">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link">About</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
        <NavItem><Button className="createButton" onClick={this.props.showCreateModal}>Create a Book</Button></NavItem>
      </Navbar>
    )
  }
}

export default Header;
