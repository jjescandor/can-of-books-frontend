import React from 'react';
import "./ReadingList.css"
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ReactStars from 'react-rating-stars-component';

class ReadingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readingList: []
        }
    }

    componentDidMount = () => {
        console.log("App componentdidmount");
        console.log('authenticate', this.props.auth0.isAuthenticated);
        this.getReadingList();
        this.props.changeResult();
    }

    getReadingList = async () => {
        if (this.props.auth0.isAuthenticated) {
            const res = await this.props.auth0.getIdTokenClaims();
            console.log("res", res);
            const jwt = res.__raw;
            console.log('token: ', jwt);

            const config = {
                headers: { "Authorization": `Bearer ${jwt}` },
                method: 'get',
                baseURL: `${process.env.REACT_APP_COB}`,
                url: '/reading'
            }

            const booksResponse = await axios(config);
            console.log("Books from DB: ", booksResponse.data);
            this.setState({ readingList: booksResponse.data });
        }
    }

    handleDeleteBook = async (book) => {
        if (this.props.auth0.isAuthenticated) {
            const res = await this.props.auth0.getIdTokenClaims();
            console.log("res", res);
            const jwt = res.__raw;
            console.log('token: ', jwt);

            const config = {
                headers: { "Authorization": `Bearer ${jwt}` },
                method: 'delete',
                baseURL: `${process.env.REACT_APP_COB}`,
                url: `/reading/${book._id}`,
                data: book
            }

            const booksResponse = await axios(config);
            console.log("Books from DB: ", booksResponse.data);
            this.getReadingList();
        }
    }


    render() {
        return (
            <>
                <h1>My Reading List</h1>
                <Accordion
                    id="readingListCont"
                    defaultActiveKey='0'
                    flush>
                    {this.state.readingList.map(book =>
                        <Accordion.Item

                            eventKey={book._id}>
                            <Accordion.Header id="readingListHdr">{book.title}</Accordion.Header>
                            <Accordion.Body id="readingListBody">
                                <img
                                    id="readingListImg"
                                    src={book.url}
                                    alt="" />
                                <div>
                                    <p>Genre: {book.genre}</p>
                                    <ReactStars
                                        value={4.5}
                                        count={5}
                                        size={24}
                                        activeColor='#F7D004'
                                    />
                                    <p>{book.description}</p>
                                    <Button
                                        id="readingListBtn"
                                        onClick={() => this.handleDeleteBook(book)}>
                                        Delete
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </>)

    }
}

export default withAuth0(ReadingList);
