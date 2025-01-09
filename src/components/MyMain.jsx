import Container from 'react-bootstrap/Container';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';

const MyMain = function () {
  return (
    <main className='bg-body-secondary pt-2 pb-3'>
      <Container>
        <Welcome />
        <AllTheBooks />
      </Container>
    </main>
  );
};

export default MyMain;
