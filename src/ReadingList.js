import React from 'react';
import "./ReadingList.css"
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

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
                {this.state.readingList.map(book => {
                    return (<div div id="readingListDiv" key={book._id} >
                        <h3>{book.title}</h3>
                        <img src={book.url} alt="" />
                        <Button
                            id="readingListBton"
                            onClick={() => this.handleDeleteBook(book)}
                        >
                            Delete
                        </Button>
                    </div>)
                })}
            </>
        )
    }
}

export default withAuth0(ReadingList);
