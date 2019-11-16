import React, { Component } from 'react';
import { Col, Row } from 'react-materialize';
import { debounce } from 'throttle-debounce';
import Results from '../../components/Results'
import Searchbar from '../../components/Searchbar';
import API from '../../utils/API';

class Search extends Component {

  state = {
    books: [],
    search: ""
  }

  // componentDidMount() {
  //   this.loadBooks(this.state.search);
  // }

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
    this.setState({search: value})
  };

  waitSearch = (event) => {
    debounce(300, (event) => {
      this.handleInputChange(event)
    });
  }



  render() {

    return (
      <>
        <Searchbar term={this.state.search} type={this.handleInputChange} loadBooks={this.loadBooks}></Searchbar>
        <Row className="center">
          <Col s={12} className="center">
            <h1>Search Books</h1>
            {this.state.books.length ? (
              <Results {...this.state}></Results>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </>
    )
  };

};

export default Search