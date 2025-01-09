import Container from 'react-bootstrap/Container';
import Welcome from './Welcome';
// import AllTheBooks from './AllTheBooks';
import BookList from './BookList';
import fantasyBooks from '../data/fantasy.json';

const MyMain = function () {
  return (
    <main className='bg-body-secondary pt-2 pb-3'>
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasyBooks} />
      </Container>
    </main>
  );
};

export default MyMain;
