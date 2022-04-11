import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className='resDiv'>
        <h3 className='resH1'>Search Results</h3>
        <Row xs={1} sm={2} md={3} lg={3} xl={4} className='resRow'>
          {this.props.searchResultArr.map((value, idx) => {
            return (
              <Col key={idx} >
                <Card className='resCard'>
                  <Card.Img
                    className='resImg'
                    src={value.url}
                    alt={value.title}
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Search;
