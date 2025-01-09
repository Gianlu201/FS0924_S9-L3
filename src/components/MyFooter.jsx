import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MyFooter = function () {
  return (
    <footer className='pt-3'>
      <Container>
        <Row>
          <Col>
            <h4>Links</h4>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Browse</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Community</h4>
            <ul>
              <li>
                <a href='#'>Book&apos;s Friends</a>
              </li>
              <li>
                <a href='#'>Join Us</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
