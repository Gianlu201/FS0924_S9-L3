import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from './SingleBook';

const BookList = function (props) {
  return (
    <Row>
      {props.books.map((book) => {
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
  );
};

export default BookList;
