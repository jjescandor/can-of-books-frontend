import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReactStars from 'react-rating-stars-component';
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
          <ReactStars
            value={4.5}
            count={5}
            onChange={this.changeRating}
            size={24}
            activeColor='#FFFF00'
          />
          <Button
            id="readingModalBtn"
            onClick={() => this.props.addToReadingList(this.props.bookData)}
          >
            Add to reading list
          </Button>
          <p>{this.props.bookData.description}</p>
        </Modal.Body>
        <Modal.Footer id='modalFooter'>
          <div>
            <Button
              id="bookModalBtn"
              onClick={() => this.props.deleteBook(this.props.bookData._id)}
            >
              Delete
            </Button>
            <Button
              id="bookModalBtn"
              onClick={() => this.props.showUpdateModal(this.props.bookData)}
            >
              Update
            </Button>
          </div>
          <Button
            id="bookModalBtn"
            onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BookModal;
