import React from 'react';
import { Autocomplete, Icon, Row, Col } from 'react-materialize';

function Searchbar() {

  return (

    <Row>
      <Col s={6} offset="s3" >
        <Autocomplete  s={12} options={{ data: { "Gus Fring": null, "Saul Goodman": null, "Tuco Salamanca": 'https://placehold.it/250x250' } }} placeholder="Search for a book" icon={<Icon small>book</Icon>} />
      </Col>
    </Row>

  );
};

export default Searchbar;