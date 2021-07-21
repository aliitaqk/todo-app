import React from 'react';
import './style/Button.css';

function Button(props) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}>
        { props.text }
    </button>
  )
}

export default Button
