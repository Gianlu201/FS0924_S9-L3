import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import '../../public/assets/css/singleBook.css';
import { Component } from 'react';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  bookSelected = () => {
    this.setState({ selected: !this.state.selected });
    console.log(this.props.book.title);
    setTimeout(() => {
      console.log('Setted to ' + this.state.selected);
    }, 200);
  };

  render() {
    return (
      <Card
        className={
          this.state.selected
            ? 'position-relative selected'
            : 'position-relative'
        }
        style={{ width: '18rem', cursor: 'pointer' }}
      >
        <Card.Img
          variant='top'
          src={this.props.book.img}
          onClick={() => {
            this.bookSelected();
          }}
          style={{ maxHeight: '350px' }}
        />
        <Badge pill bg='success' className=' fs-6'>
          {this.props.book.category}
        </Badge>
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <div className='d-flex justify-content-between align-items-center mt-3'>
            <p className='lead fw-medium m-0 ms-2 bg-success-subtle p-1 rounded-5'>
              €{this.props.book.price}
            </p>
            <Button variant='primary'>Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
