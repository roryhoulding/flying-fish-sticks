import React from 'react';

// Styles
import './TextInput.css'

const TextInput = ({ handleChange, placeholder, value }) => {
  return (
    <input 
      type='text' 
      onChange={handleChange} 
      placeholder={placeholder}
      value={value}
    ></input>
  )
}

export default TextInput