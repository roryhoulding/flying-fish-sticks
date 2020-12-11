import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Pages
// import WaitingRoom from './WaitingRoom/WaitingRoom';
// import NameColletion from './NameCollection/NameCollection';

const Game = ({ socket }) => {
  // const [playerName, setPlayerName] = useState('');
  let { roomCode } = useParams();

  // get the data, attempting to join game
  useEffect(() => {
    socket.emit('attemptJoinGameRoom', roomCode);

    socket.on('err', (err) => {
      console.log(err.msg);
    })
  
    socket.on('joinedGameRoom', (game) => {
      console.log('hello');
    })

    socket.on('test', () => console.log('test'))

  }, [])


  // waiting room
  // gameplay
  // results

  // if (gameStatus === 'waiting-room')

  // switch(gameStatus) {
  //   case 'waiting-room':
  //     return <WaitingRoom />
  //   default: 
  //     return <div>Default</div>
  // }

  return (
    // Collect name
    // Waiting room
    // Gameplay
    // Results
    <div>What's your name?</div>
  )
}

export default Game