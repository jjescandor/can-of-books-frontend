import React from 'react';
import Carousel from 'react-elastic-carousel';
import './BestBooks.css';
import axios from 'axios';
import BookModal from './BookModal';
import CreateModal from './CreateModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fiction: null,
      adventure: null,
      nonFiction: null,
      fantasy: null,
      youngAdult: null,
      books: [],
      error: '',
      show: false,
      selectedBooks: {},
      createShow: false,
    };
  }

  onHide = () => {
    this.setState({ show: false });
  };

  createBook = async (newBook) => {
    try {
      const url = `${process.env.REACT_APP_MONGO}/books`;
      const response = await axios.post(url, newBook);
      console.log(newBook);
      console.log(response.data);
      this.getBookData();
    } catch (e) {
      console.log(e.message);
    }
  };

  deleteBook = async (id) => {
    try {
      console.log(id);
      const url = `${process.env.REACT_APP_MONGO}/books/${id}`;
      const response = await axios.delete(url);
      console.log(response.data);
      this.getBookData();
    } catch (e) {
      console.log(e.message);
    }
  };

  getBookData = async () => {
    try {
      const url = `${process.env.REACT_APP_MONGO}/books`;
      const response = await axios.get(url);
      this.setState({ books: response.data });
      this.filterGenre();
    } catch (e) {
      this.setState({ error: e.message });
    }
  };

  componentDidMount = () => {
    this.getBookData();
  };

  filterGenre = () => {
    const fiction = this.state.books.filter(
      (value) => value.genre === 'Fiction'
    );
    this.setState({ fiction: fiction });
    const adventure = this.state.books.filter(
      (value) => value.genre === 'Adventure'
    );
    this.setState({ adventure: adventure });
    const nonFiction = this.state.books.filter(
      (value) => value.genre === 'Non-Fiction'
    );
    this.setState({ nonFiction: nonFiction });
    const fantasy = this.state.books.filter(
      (value) => value.genre === 'Fantasy'
    );
    this.setState({ fantasy: fantasy });
    const youngAdult = this.state.books.filter(
      (value) => value.genre === 'Young Adult'
    );
    this.setState({ youngAdult: youngAdult });
  };

  render() {
    /* TODO: render user's books in a Carousel */
    const breakpoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];

    return (
      <>
        <h1 className='booksH1'>All Genres</h1>
        {this.state.books.length > 0 ? (
          <Carousel className='booksCarousel' breakPoints={breakpoints}>
            {this.state.books.map((value) => (
              <img
                key={value._id}
                className='d-block w-100 booksImg'
                src={value.url}
                alt={value.title}
                onClick={() => {
                  this.setState({
                    show: true,
                    selectedBooks: value,
                  });
                }}
              />
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <h1 className='booksH1'>Fiction</h1>
        {this.state.fiction ? (
          <Carousel className='booksCarousel' breakPoints={breakpoints}>
            {this.state.fiction.map((value) => (
              <img
                key={value._id}
                className='d-block w-100 booksImg'
                src={value.url}
                alt={value.title}
                onClick={() => {
                  this.setState({
                    show: true,
                    selectedBooks: value,
                  });
                }}
              />
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <h1 className='booksH1'>Non-Fiction</h1>
        {this.state.nonFiction ? (
          <Carousel className='booksCarousel' breakPoints={breakpoints}>
            {this.state.nonFiction.map((value) => (
              <img
                key={value._id}
                className='d-block w-100 booksImg'
                src={value.url}
                alt={value.title}
                onClick={() => {
                  this.setState({
                    show: true,
                    selectedBooks: value,
                  });
                }}
              />
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <h1 className='booksH1'>Adventure</h1>
        {this.state.adventure ? (
          <Carousel className='booksCarousel' breakPoints={breakpoints}>
            {this.state.adventure.map((value) => (
              <img
                key={value._id}
                className='d-block w-100 booksImg'
                src={value.url}
                alt={value.title}
                onClick={() => {
                  this.setState({
                    show: true,
                    selectedBooks: value,
                  });
                }}
              />
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <h1 className='booksH1'>Fantasy</h1>
        {this.state.fantasy ? (
          <Carousel className='booksCarousel' breakPoints={breakpoints}>
            {this.state.fantasy.map((value) => (
              <img
                key={value._id}
                className='d-block w-100 booksImg'
                src={value.url}
                alt={value.title}
                onClick={() => {
                  this.setState({
                    show: true,
                    selectedBooks: value,
                  });
                }}
              />
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <h1 className='booksH1'>Young Adult</h1>
        {this.state.youngAdult ? (
          <Carousel className='booksCarousel' breakPoints={breakpoints}>
            {this.state.youngAdult.map((value) => (
              <img
                key={value._id}
                className='d-block w-100 booksImg'
                src={value.url}
                alt={value.title}
                onClick={() => {
                  this.setState({
                    show: true,
                    selectedBooks: value,
                  });
                }}
              />
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <BookModal
          bookData={this.state.selectedBooks}
          show={this.state.show}
          onHide={this.onHide}
          deleteBook={this.deleteBook}
        />
        <CreateModal
          createShow={this.props.createShow}
          hideCreateModal={this.props.hideCreateModal}
          createBook={this.createBook}
        />
      </>
    );
  }
}

export default BestBooks;
