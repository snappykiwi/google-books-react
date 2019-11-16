import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Results from '../../components/Results'
import Searchbar from '../../components/Searchbar';
import API from '../../utils/API';

class Save extends Component {

  state = {
    books: []
  }
  
  componentDidMount() {
    this.loadBooks();
  }


  loadBooks = () => {
    console.log(this.state.search);
    API.getBooks()
      .then(res => {
        console.log(res);
        this.setState({ books: res.data, search: "" })
      }
      )
      .catch(err => console.log(err));
  };
  
  
  render() {
    return (
      <>
        <Row>
          <Col s={12}>
            <h1 className="center">Saved Books</h1>
          </Col>
        </Row>
        <Results books={this.state.books}></Results>
      </>
    )
  }
}

export default Save