import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CreateModal.css';

class UpdateFormModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.selectedUpdateBooks?._id,
            author: this.props.selectedUpdateBooks?.author,
            description: this.props.selectedUpdateBooks?.description,
            genre: this.props.selectedUpdateBooks?.genre,
            title: this.props.selectedUpdateBooks?.title,
            url: this.props.selectedUpdateBooks?.url,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleUpdateBook(this.state);
        this.props.updateOnHide();
        this.props.onHide();
    };

    handleTitleChange = (event) => this.setState({ title: event.target.value });
    handleAuthorChange = (event) => this.setState({ author: event.target.value });
    handleUrlChange = (event) => this.setState({ url: event.target.value });
    handleGenreChange = (event) => this.setState({ genre: event.target.value });
    handleDescriptionChange = (event) =>
        this.setState({ description: event.target.value });

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
                        <Form.Group controlId='formTitle'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter title'
                                onChange={this.handleTitleChange}
                                value={this.state.title}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formAuthor'>
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                placeholder='Enter Author'
                                type='name'
                                value={this.state.author}
                                onChange={this.handleAuthorChange}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formImgurl'>
                            <Form.Label>Img url</Form.Label>
                            <Form.Control
                                placeholder='Enter Image URL'
                                type='name'
                                value={this.state.url}
                                onChange={this.handleUrlChange}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formGenre'>
                            <Form.Label>Genre</Form.Label>
                            <Form.Control
                                className='formSelect'
                                as='select'
                                value={this.state.genre}
                                onChange={this.handleGenreChange}
                            >
                                <option value='Adventure'>Adventure</option>
                                <option value='Fantasy'>Fantasy</option>
                                <option value='Fiction'>Fiction</option>
                                <option value='Non-Fiction'>Non-Fiction</option>
                                <option value='Young Adult'>Young Adult</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formDescription'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as='textarea'
                                rows='3'
                                placeholder='Enter Description'
                                type='name'
                                value={this.state.description}
                                onChange={this.handleDescriptionChange}
                            ></Form.Control>
                        </Form.Group>
                        <Button type='submit' id='submitBtn'>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer id='modalFooterTwo'>
                    <Button onClick={this.props.updateOnHide} id='submitBtn'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default UpdateFormModal;
