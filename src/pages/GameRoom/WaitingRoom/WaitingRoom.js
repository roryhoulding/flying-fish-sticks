import React, { useState, useEffect } from 'react';

// Components
import NameInput from './NameInput';

// Helpers
import findObjectInArray from '../../../helpers/findObjectInArray';

const WaitingRoom = ({ roomData, socket }) => {
  const [showNameInput, setShowNameInput] = useState(false);
  
  useEffect(() => {
    const playerIndex = findObjectInArray(roomData.players, 'id', socket.id);
    const playerName = roomData.players[playerIndex].name;
    setShowNameInput(playerName ? false : true);
  }, [roomData])

  return (
    <>
      <div>Waiting room</div>
      {roomData.players.map(player => {
        if (player.name) {
          return <p key={player.id}>{player.name}</p>
        } else {
          return <p key={player.id}>Player...</p>
        }
      })}
      {showNameInput ? <NameInput socket={socket}/> : null
      }
    </>
  )
}

export default WaitingRoom