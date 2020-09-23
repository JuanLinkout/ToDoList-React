import React from 'react';

import './Button.css';

export default props => {
  const classes = `button ${props.classe}`;

  return (
    <button className={classes} onClick={(e) => props.buttonFunction && props.buttonFunction(e)}>{props.value}</button>
  );
}