import React from 'react';
import Carousel from 'react-elastic-carousel';
import './BestBooks.css';
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
    try {
      const url = `${process.env.REACT_APP_MONGO_SERVER}`;
      const response = await axios.get(url);
      this.setState({ books: response.data });
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  render() {

    /* TODO: render user's books in a Carousel */
    const breakpoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ]

    return (
      <>
        <h1 className='booksH1'>Available Books</h1>
        {this.state.books.length > 0 ? (
          <Carousel className='booksCarousel' breakPoints={breakpoints}>
            {this.state.books.map((value) =>
              <img
                key={value._id}
                className="d-block w-100 booksImg"
                src={value.url}
                alt={value.title}
              />
            )}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
