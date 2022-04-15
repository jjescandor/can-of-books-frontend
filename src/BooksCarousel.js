import React from 'react';
import './BestBooks.css';
import Carousel from 'react-elastic-carousel';

class BooksCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const breakpoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 4 },
        ];
        return (
            <>
                {this.props.books &&
                    <Carousel className='booksCarousel' breakPoints={breakpoints}>
                        {this.props.books.map((book) => (
                            <img
                                key={book._id}
                                className='d-block w-100 booksImg'
                                src={book.url}
                                alt={book.title}
                                onClick={() => {
                                    this.props.selectBook(book);
                                }}
                            />
                        ))}
                    </Carousel>}
            </>
        )
    }
}

export default BooksCarousel;
