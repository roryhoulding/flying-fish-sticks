import React, { useState } from 'react';

// Components
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/Button/Button';

const NameCollection = ({ socket }) => {
  const [nameInput, setNameInput] = useState('');

  const handleChangeName = (e) => {
    setNameInput(e.target.value);
  }

  const submitName = (e) => {
    e.preventDefault();
    socket.emit('nameChange', nameInput);
  }

  return (
    <form onSubmit={submitName}>
      <TextInput 
        handleChange={handleChangeName}
        placeholder='Enter your name'
        value={nameInput}
      />
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default NameCollection