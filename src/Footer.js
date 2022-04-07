import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className='nav' collapseOnSelect expand="lg" bg="medium" variant="dark">
        <Navbar.Brand></Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
