import React from 'react';
import { Row, Col, TextInput, Button } from 'react-materialize';
import './styles.css'

function Searchbar({ loadBooks, type, term }) {

  return (

    <Row className="searchbar">
      <Col s={10} offset="s1" >
        <TextInput value={term} onChange={type} placeholder="Enter a Book Title" s={12}></TextInput>
        <Button onClick={loadBooks} className="searchButton" center flat waves="light">
          Search
        </Button>
      </Col>
    </Row>

  );
};

export default Searchbar;