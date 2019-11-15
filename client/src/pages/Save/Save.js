import React from 'react';
import { Row, Col } from 'react-materialize';
import Searchbar from '../../components/Searchbar'

function Save() {
  return (
    <>
      <Searchbar />
      <Row>
        <Col s={12}>
          <h1 className="center">Saved Books</h1>
        </Col>
      </Row>
    </>
  )
}

export default Save