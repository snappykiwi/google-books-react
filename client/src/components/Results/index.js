import React from 'react';
import { Card, CardTitle, Col, Row, Button } from 'react-materialize';
import API from '../../utils/API';
import './styles.css'

const saveBook = (title, authors, description, image, link) => {
  console.log(title, authors, description, image, link);
  API.saveBook({
    title,
    authors,
    description,
    image,
    link
  });
}


function Results({ books, loadBooks }) {

  const removeBook = (bookId) => {
    console.log(bookId);
    API.deleteBook(bookId);
    loadBooks();
  };

  return (
    <Row>
      {books.map((book) => (

        book.volumeInfo ? (
          <Col key={book.id} s={12}>

            <Card horizontal
              header={<CardTitle image={!book.volumeInfo.imageLinks ? "" : book.volumeInfo.imageLinks.thumbnail}></CardTitle>}
              actions={[
                <a className="cardLink" href={book.volumeInfo.infoLink}>View Book</a>,
                <Button flat waves="light" className="cardLink"
                  onClick={() => { saveBook(book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.infoLink) }}
                  >Save Book</Button>
              ]}>

              <h5>{book.volumeInfo.title}</h5>

              <p><strong>Author(s): </strong> {(book.volumeInfo.authors) ? book.volumeInfo.authors.map((author) => (
                <span key={author}> {author} <br /> </span>
              )) : <span>N/A</span>}
              </p>

              <p>{book.volumeInfo.description}</p>

            </ Card>
          </ Col>

        ) : (

            <Col key={book._id} s={12}>

              <Card horizontal
                header={<CardTitle image={!book.image ? "" : book.image}></CardTitle>}
                actions={[
                  <a className="cardLink" href={book.link}>View Book</a>,
                  <Button flat waves="light" className="cardLink"
                    onClick={() => { removeBook(book._id) }}
                    >Remove Book</Button>
                ]}>

                <h5>{book.title}</h5>

                <p><strong>Author(s): </strong> {(book.authors.length) ? book.authors.map((author) => (
                  <span key={author}> {author} <br /> </span>
                )) : <span>N/A</span>}
                </p>

                <p>{book.description}</p>

              </ Card>

            </ Col>
          )
      ))}
    </Row>
  )

}

export default Results;