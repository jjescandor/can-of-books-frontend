import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CreateModal.css';

class CreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeRating = () => {
    //more to come
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.title.value,
      author: event.target.author.value,
      url: event.target.img.value,
      description: event.target.description.value,
      genre: event.target.genre.value,
    };

    this.props.createBook(newBook);
    this.props.hideCreateModal();
  };

  render() {
    return (
      <Modal
        show={this.props.createShow}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header className='modalHeader'>
          <Modal.Title>Create a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder='Enter title'
                type='text'
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='author'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                placeholder='Enter Author'
                type='text'
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='img'>
              <Form.Label>Img url</Form.Label>
              <Form.Control
                placeholder='Enter Image URL'
                type='text'
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='genre'>
              <Form.Label>Genre</Form.Label>
              <Form.Control className='formSelect' as='select'>
                <option value='Adventure'>Adventure</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Fiction'>Fiction</option>
                <option value='Non-Fiction'>Non-Fiction</option>
                <option value='Young Adult'>Young Adult</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                placeholder='Enter Description'
                type='text'
              ></Form.Control>
            </Form.Group>
            <Button
              type='submit' id='submitBtn'>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button onClick={this.props.hideCreateModal} id='submitBtn'>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateModal;
