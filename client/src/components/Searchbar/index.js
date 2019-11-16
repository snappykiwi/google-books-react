import React from 'react';
import { Autocomplete, Icon, Row, Col, TextInput, Button } from 'react-materialize';
import './styles.css'

function Searchbar({ loadBooks, type, term }) {



  return (

    <Row className="searchbar">
      <Col s={10} offset="s1" >
        {/* <Autocomplete onChange={waitSearch}  s={12} options={{ data: { "Morning Star": null, "Tale": null, "Harry Potter": null } }} placeholder="Search for a book" icon={<Icon small>book</Icon>} /> */}
        <TextInput value={term} onChange={type} placeholder="Enter a Book Title" s={12}></TextInput>
        <Button onClick={loadBooks} center flat waves="light">
          Search
        </Button>
      </Col>
    </Row>

  );
};

export default Searchbar;