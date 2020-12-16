import React from 'react';

const WaitingRoom = ({ roomData }) => {
  return (
    <>
      <div>Waiting room</div>
      {roomData.players.map(player => (
        <p key={player.id}>{player.id}</p>
      ))}
    </>
  )
}

export default WaitingRoom