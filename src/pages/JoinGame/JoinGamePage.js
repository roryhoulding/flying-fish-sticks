import React, {useState} from 'react';
import { Link } from 'react-router-dom'

// Components
import Card from '../../components/Card/Card';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

// Styles
import './JoinGamePage.css'

const JoinGame = () => {
  const [roomCode, setRoomCode] = useState('');

  const codeInputHandleChange = (e) => {
    setRoomCode(e.target.value.toUpperCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(roomCode);
  }

  return (
    <div className='join-page-container'>
      <Card padding='48'>
        <form onSubmit={handleSubmit} className='join-form'>
          <h3>Join a game</h3>
          <TextInput
            value={roomCode}
            handleChange={codeInputHandleChange}
            placeholder='Enter a game code'
            upperCase
          />
          <Button type='submit'>Join game</Button>
        </form>
        <Link to='/new'>Create a new game</Link>
        <Link to='/how-to-play'>How to play</Link>
      </Card>
    </div>
  )
}

export default JoinGame