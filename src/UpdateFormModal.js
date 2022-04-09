import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CreateModal.css';



class UpdateFormModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "hi",
            author: this.props.bookData?.author,
            title: this.props.bookData?.title,
            url: this.props.bookData?.url,
            description: this.props.bookData?.description,
            genre: this.props.bookData?.genre
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ _id: this.id() });
        this.props.handleUpdateBook(this.state._id);
    };

    id = () => {
        return this.props.bookData._id;
    }
    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
        console.log(this.state.title);

    };
    handleAuthorChange = (event) => this.setState({ author: event.target.value });
    handleUrlChange = (event) => this.setState({ url: event.target.value });
    handleGenreChange = (event) => this.setState({ genre: event.target.value });
    handleDescriptionChange = (event) => this.setState({ description: event.target.value });

    render() {
        return (
            <Modal
                show={this.props.showUpdate}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header className='modalHeader'>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                placeholder='Enter title'
                                onChange={this.handleTitleChange}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='author'>
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                placeholder='Enter Author'
                                type='text'

                                onChange={this.handleAuthorChange}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='img'>
                            <Form.Label>Img url</Form.Label>
                            <Form.Control
                                placeholder='Enter Image URL'
                                type='text'

                                onChange={this.handleUrlChange}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='genre'>
                            <Form.Label>Genre</Form.Label>
                            <Form.Control className='formSelect' as='select' onChange={this.handleGenreChange}>
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
                                onChange={this.handleDescriptionChange}
                            ></Form.Control>
                        </Form.Group>
                        <Button type='submit' id='submitBtn' onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button onClick={this.props.onHide} id='submitBtn'>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UpdateFormModal;
