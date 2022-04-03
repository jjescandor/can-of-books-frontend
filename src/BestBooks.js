import React from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: ''
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount = async () => {
    const url = `https://can-of-books-backend-erich.herokuapp.com/books`;
    const response = await axios.get(url);
    this.setState({ books: response.data });
  }

  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>Available Books</h2>
        {this.state.books.length > 0 ? (
          this.state.books.map((value, idx) =>
            <Carousel key={value._id}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={value.url}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          )) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
