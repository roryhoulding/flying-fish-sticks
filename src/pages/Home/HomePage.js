import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../../components/Button/Button';

const HomePage = ({ socket }) => {

  const handleClickNew = () => {
    socket.emit('createNewGameRoom');
  }

  return (
    <>
      <Button handleClick={handleClickNew}>New game</Button>
      <Link to='/join'>
        <Button>Join game</Button>
      </Link>
      <div>Home</div>
    </>
  )
}

export default HomePage