import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './BestBooks.css';

class BookModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton className='modalHeader'>
          <Modal.Title>{this.props.bookData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <p>Author: {this.props.bookData.author}</p>
          <p>{this.props.bookData.description}</p>
          <Button>Add to Cart</Button>
        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BookModal;
