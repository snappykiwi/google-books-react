import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import { debounce } from 'throttle-debounce';
import Results from '../../components/Results'
import Searchbar from '../../components/Searchbar';
import API from '../../utils/API';
import './styles.css';

class Search extends Component {

  state = {
    books: [],
    search: ""
  }

  loadBooks = () => {
    console.log(this.state.search);
    API.getGoogle(this.state.search)
      .then(res => {
        console.log(res);
        this.setState({ books: res.data.items, search: "" })
      }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({ search: value })
  };

  waitSearch = (event) => {
    debounce(300, (event) => {
      this.handleInputChange(event)
    });
  }



  render() {

    return (
      <>
        <Row className="center">
          <Col s={12} className="center pageTitle">

            <h1>Search Books</h1>

          </Col>
        </Row>

        <Row>
          <Col s={12} className="center">

            <Searchbar term={this.state.search} type={this.handleInputChange} loadBooks={this.loadBooks}></Searchbar>

            {this.state.books.length ? (
              <Results {...this.state}></Results>
            ) : (
                <h3 className="noResults">Search to View Books</h3>
              )}

          </Col>
        </Row>
      </>
    )
  };

};

export default Search