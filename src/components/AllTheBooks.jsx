import '../../public/assets/css/allTheBooks.css';

import { Component } from 'react';
import booksArr from '../data/fantasy.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

class AllTheBooks extends Component {
  render() {
    return (
      <Row>
        {booksArr.map((book, i) => {
          return (
            <Col
              key={i}
              xs={6}
              lg={4}
              xl={3}
              className='mb-4 d-flex justify-content-center'
            >
              <Card
                key={book.asin}
                className='position-relative'
                style={{ width: '18rem', cursor: 'pointer' }}
              >
                <Card.Img
                  variant='top'
                  src={book.img}
                  style={{ maxHeight: '350px' }}
                />
                <Badge pill bg='success' className=' fs-6'>
                  {book.category}
                </Badge>
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <div className='d-flex justify-content-between align-items-center mt-3'>
                    <p className='lead fw-medium m-0 ms-2 bg-success-subtle p-1 rounded-5'>
                      €{book.price}
                    </p>
                    <Button variant='primary'>Add to cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default AllTheBooks;
