import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import SingleBook from './SingleBook';
import { Component } from 'react';

class BookList extends Component {
  state = {
    search: '',
  };

  updateFormControl(e) {
    this.setState({ search: e.target.value });

    this.updateBooksFound();
  }

  updateBooksFound() {
    this.booksFound = this.props.books.filter(
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
