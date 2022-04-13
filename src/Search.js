import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import SearchModal from './SearchModal.js';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectedBooks: null,
    };
  }

  onHide = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        {!this.props.searchResultArr && <Redirect to='/Home' />}
        <div className='resDiv'>
          <h3 className='resH1'>Search Results</h3>
          <Row xs={1} sm={2} md={3} lg={3} xl={4} className='resRow'>
            {this.props.searchResultArr &&
              this.props.searchResultArr.map((value, idx) => {
                return (
                  <Col key={idx}>
                    <Card className='resCard'>
                      <Card.Img
                        className='resImg'
                        src={value.url}
                        alt={value.title}
                        onClick={() => {
                          console.log('hello');
                          this.setState({
                            show: true,
                            selectedBooks: value,
                          });
                        }}
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
          {this.state.selectedBooks && (
            <SearchModal
              bookData={this.state.selectedBooks}
              show={this.state.show}
              onHide={this.onHide}
            />
          )}
        </div>
      </>
    );
  }
}

export default Search;
