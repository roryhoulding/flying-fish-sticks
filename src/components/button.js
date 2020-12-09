import React from 'react';

// Styles
import './button.css'

const Button = ({color, children}) => {

  // Create classes string from props
  const classList = [
    color ? color : 'purple',
  ].join(' ');

  return (
    <button className={classList}>{children}</button>
  )
}

export default Button