import React from 'react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  // async componentDidMount() {
  //   let url = `http:///books`;
  //   const response = await axios.get(url);
  //   console.log(response.data);
  //   this.setState({ books: response.data});
  // }


  render() {

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>Available Books</h2>
        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
