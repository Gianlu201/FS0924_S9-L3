import Container from 'react-bootstrap/Container';
import Welcome from './Welcome';
// import AllTheBooks from './AllTheBooks';
import BookList from './BookList';
// import fantasyBooks from '../data/fantasy.json';

const MyMain = function () {
  return (
    <main className='bg-body-secondary pt-2 pb-3 flex-grow-1'>
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList />
      </Container>
    </main>
  );
};

export default MyMain;
