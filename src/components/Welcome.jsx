import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Welcome = function () {
  const [show, setShow] = useState(true);

  let alert;

  if (show) {
    alert = (
      <Alert
        variant='success'
        className='my-0 mx-auto'
        onClose={() => setShow(false)}
        dismissible
      >
        Ciao Gianluca, bentornato!!
      </Alert>
    );
  }

  return (
    <div>
      {/* <Alert className='my-0 mx-auto'>Ciao Gianluca, bentornato!!</Alert> */}
      {alert}

      <h1 className='mt-2'>EpiBooks</h1>
    </div>
  );
};

export default Welcome;
