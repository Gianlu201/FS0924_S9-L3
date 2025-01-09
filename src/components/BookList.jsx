import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SingleBook from './SingleBook';
import { Component } from 'react';

import fantasyBooks from '../data/fantasy.json';
import historyBooks from '../data/history.json';
import horrorBooks from '../data/horror.json';
import romanceBooks from '../data/romance.json';
import scifiBooks from '../data/scifi.json';

class BookList extends Component {
  state = {
    search: '',
  };

  books = fantasyBooks;

  updateFormControl(e) {
    this.setState({ search: e.target.value });

    this.updateBooksFound();
  }

  updateBooksFound() {
    this.booksFound = this.books.filter(
      (book) => book.title.toLowerCase().indexOf(this.state.search) >= 0
    );
  }

  booksFound = [];

  render() {
    this.updateBooksFound();
    return (
      <>
        <Container className='mt-3'>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              // this.setState({ search: '' });
            }}
          >
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                value={this.state.search}
                onChange={(e) => {
                  this.updateFormControl(e);
                }}
                placeholder='Search your book..'
              />
            </Form.Group>
          </Form>
        </Container>

        <div className='d-flex justify-content-center gap-3 mt-3 mb-4'>
          <Button
            type='button'
            variant='info'
            onClick={() => {
              this.books = fantasyBooks;
              this.updateBooksFound();
              this.forceUpdate();
            }}
          >
            Fantasy
          </Button>

          <Button
            type='button'
            variant='info'
            onClick={() => {
              this.books = historyBooks;
              this.updateBooksFound();
              this.forceUpdate();
            }}
          >
            History
          </Button>

          <Button
            type='button'
            variant='info'
            onClick={() => {
              this.books = horrorBooks;
              this.updateBooksFound();
              this.forceUpdate();
            }}
          >
            Horror
          </Button>

          <Button
            type='button'
            variant='info'
            onClick={() => {
              this.books = romanceBooks;
              this.updateBooksFound();
              this.forceUpdate();
            }}
          >
            Romance
          </Button>

          <Button
            type='button'
            variant='info'
            onClick={() => {
              this.books = scifiBooks;
              this.updateBooksFound();
              this.forceUpdate();
            }}
          >
            Scifi
          </Button>
        </div>

        <Row>
          {this.booksFound.length === 0 && (
            <h4 className=' ms-3'>Nessun risultato!</h4>
          )}

          {this.booksFound.map((book) => {
            return (
              <Col
                key={book.asin}
                xs={6}
                lg={4}
                xl={3}
                className='mb-4 d-flex justify-content-center'
              >
                <SingleBook book={book} />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default BookList;
