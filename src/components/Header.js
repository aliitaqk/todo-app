import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './style/Header.css';
import PropType from 'prop-types'
import Button from './Button';

function Header(props) {
  
  const location = useLocation()

  return (
    <div className="header">
      <div class="top-bar">
        <h1><Link to="/">{ props.title }</Link></h1>
        { location.pathname === '/' && <Button
          color={ props.showAddForm ? "red": "green" }
          text={ props.showAddForm ? "Close": "Add" }
          onClick={props.toggleForm}
        />}
      </div>
      <div className="section-link">
        <Link className="section-link-button" to="/">Home</Link>
        <Link className="section-link-button" to="/archived">Archived</Link>
        <Link className="section-link-button" to="/about">About</Link>
      </div>
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