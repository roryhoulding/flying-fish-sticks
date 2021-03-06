import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Pages
import WaitingRoom from './WaitingRoom/WaitingRoom';
import GamePlay from './GamePlay/GamePlay';

const GameRoom = ({ socket }) => {
  const [roomData, setRoomData] = useState({status: 'loading'});
  const { roomCode } = useParams();

  // Attempt to join a game room  
  useEffect(() => {
    socket.emit('attemptJoinGameRoom', roomCode);

    socket.on('err', (err) => {
      console.log(err.msg);
    })

    socket.on('roomDoesNotExist', () => {
      setRoomData({doesNotExist: true})
    })
  
    socket.on('roomUpdate', (data) => {
      console.log(data);
      setRoomData(data);
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

  if (!roomData) {
    return <p>Hmmm, something went wrong</p>
  }

  if (roomData.doesNotExist) {
    return <p>This room does not exist</p>
  }

  if (roomData.status === 'loading') {
    return <p>Loading...</p>
  }

  if (roomData.status === 'waiting-room') {
    return <WaitingRoom roomData={roomData} socket={socket}/>
  }

  if (roomData.status === 'in-a-game') {
    return <GamePlay roomData={roomData} socket={socket}/>
  }
}

export default GameRoom