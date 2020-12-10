import React from 'react';

// Styles
import './Button.css'

const Button = ({style, handleClick, children, type}) => {

  // Create classes string from props
  const classList = [
    style ? style : 'primary',
  ].join(' ');

  return (
    <button 
      type={type ? type : 'button'}
      onClick={handleClick} 
      className={classList}
    >
      {children}
    </button>
  )
}

export default Button