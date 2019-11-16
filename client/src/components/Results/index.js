import React from 'react';
import { Card, CardTitle, Col, Row } from 'react-materialize';
import API from '../../utils/API';

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

function Results({ books }) {

  return (
    <Row>
      {books.map((book) => (
        <Col key={book.id} s={12}>

          <Card horizontal
            header={<CardTitle image={!book.volumeInfo.imageLinks ? "" : book.volumeInfo.imageLinks.thumbnail}></CardTitle>}
            actions={[
              <a className="cardLink" href={book.volumeInfo.infoLink}>View Book</a>,
              <a className="cardLink"
                onClick={() => { saveBook(book.volumeInfo.title, book.volumeInfo.authors, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail, book.volumeInfo.infoLink) }}
                href="#">Save Book</a>
                ]}>

            <h5>{book.volumeInfo.title}</h5>

            <p><strong>Author(s): </strong> {(book.volumeInfo.authors) ? book.volumeInfo.authors.map((author) => (
              <span key={author}> {author} <br /> </span>
            )) : <span>N/A</span>}
            </p>

            <p>{book.volumeInfo.description}</p>

          </ Card>

        </ Col>
      ))}
    </Row>
  )

}

export default Results;