import React from 'react';

// Helpers
import getClassStr from '../../helpers/getClassStr';

// Styles
import './Card.css'

const Card = ({ children, padding }) => {

  const classList = [
    'card',
    padding ? `pad-${padding}` : 'pad-32',
  ]

  const classStr = getClassStr(classList);
  console.log(classStr);

  return (
    <div className={classStr}>
      {children}
    </div>
  )
}

export default Card