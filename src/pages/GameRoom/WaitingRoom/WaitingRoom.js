import React, { useState, useEffect } from 'react';

// Components
import NameInput from './NameInput';
import Button from '../../../components/Button/Button';
import Emoji from '../../../components/Emoji/Emoji';

// Helpers
import findObjectInArray from '../../../helpers/findObjectInArray';

const WaitingRoom = ({ roomData, socket }) => {
  const [showNameInput, setShowNameInput] = useState(false);
  
  useEffect(() => {
    const playerIndex = findObjectInArray(roomData.players, 'id', socket.id);
    const playerName = roomData.players[playerIndex].name;
    setShowNameInput(playerName ? false : true);
  }, [roomData])

  const handleStartGame = () => {
    socket.emit('startGame');
  }

  return (
    <>
      <div>Waiting room</div>
      {roomData.players.map(player => {
        if (player.name) {
          return (
            <div key={player.id}>
              <Emoji 
                symbol={player.emoji.symbol} 
                label={player.emoji.label} 
              />
              <p>{player.name}</p>
            </div>
          )
        } else {
          return (
            <div key={player.id}>
              <Emoji 
                symbol={player.emoji.symbol} 
                label={player.emoji.label} 
              />
              <p>Player...</p>
            </div>
          )
        }
      })}
      {showNameInput ? <NameInput socket={socket}/> : null}
      {roomData.players.length < 3 ? 
        <p>You need at least 3 players...</p> :
        <Button 
          type='button'
          handleClick={handleStartGame}
        >Start game</Button>
      }
    </>
  )
}

export default WaitingRoom