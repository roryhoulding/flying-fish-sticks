import React from 'react';

// Helpers
import getClassStr from '../../helpers/getClassStr';

const Text = ({ children, level, bold, color, className, compact }) => {
  let classList = [
    (bold ? 'bold' : 'regular'),
    (color ? `text-${color}` : 'text-grey'),
    (className ? className : null),
    (compact ? 'compact-height' : null)
  ]

  const classStr = getClassStr(classList);

  const H = level ? `h${level}` : 'h1';

  return (
    <H className={classStr}>{children}</H>
  )
}

export default Text;