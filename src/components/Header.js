import React from 'react';
import { useLocation } from 'react-router-dom';
import './style/Header.css';
import PropType from 'prop-types'
import Button from './Button';

function Header(props) {
  
  const location = useLocation()

  return (
    <div className="header">
      <h1>{ props.title }</h1>
      { location.pathname === '/' && <Button
        color={ props.showAddForm ? "red": "green" }
        text={ props.showAddForm ? "Close": "Add" }
        onClick={props.toggleForm}
      />}
    </div>
  )
}


Header.defaultProps = {
  title: 'Todo App',
}

Header.PropType = {
  title: PropType.string.isRequired,
}

export default Header