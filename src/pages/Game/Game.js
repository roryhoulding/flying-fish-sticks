import React, { useState } from 'react';

const Game = ({ socket }) => {
  const [playerName, setPlayerName] = useState('');
  const [gameState, setGameState] = ('waiting-room');
  // waiting room
  // gameplay
  // results

  if (gameState === 'waiting-room') {
    return (
      <div>Waiting room</div>
    )
  }

  return (
    // Collect name
    // Waiting room
    // Gameplay
    // Results
    <div>What's your name?</div>
  )
}

export default Game