import React from 'react';
import { Col, Row } from 'react-materialize';
import Searchbar from '../../components/Searchbar';


function Search() {
  return (
    <>
      <Searchbar />
      <Row className="center">
        <Col s={12} className="center">
          <h1>Search Books</h1>
        </Col>
      </Row>
    </>
  )
}

export default Search