import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CreateModal.css';

class CreateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    changeRating = () => {
        //more to come
    }

    render() {
        return (
            <Modal
                show={this.props.createShow}
                createOnHide={this.props.createOnHide}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header className='modalHeader'>
                    <Modal.Title>Create a Book</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Author</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Img url</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows='3'></Form.Control>
                        </Form.Group>
                    </Form>
                    <Button>Submit</Button>
                </Modal.Body>
                <Modal.Footer className='modalFooter'>
                    <Button onClick={this.props.hideCreateModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CreateModal;
