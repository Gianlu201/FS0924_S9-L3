import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import '../../public/assets/css/singleBook.css';

const SingleBook = function (props) {
  return (
    <Card
      className='position-relative'
      style={{ width: '18rem', cursor: 'pointer' }}
    >
      <Card.Img
        variant='top'
        src={props.book.img}
        style={{ maxHeight: '350px' }}
      />
      <Badge pill bg='success' className=' fs-6'>
        {props.book.category}
      </Badge>
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <div className='d-flex justify-content-between align-items-center mt-3'>
          <p className='lead fw-medium m-0 ms-2 bg-success-subtle p-1 rounded-5'>
            €{props.book.price}
          </p>
          <Button variant='primary'>Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
