import React from 'react';
import {Link} from 'react-router-dom'

import '../bootstrap.css';


const Menu = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/users'>Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/projects'>Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/todos'>ToDos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/about'>About</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Menu
