import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

function Navigation() {
  return (
    <div className='navigation'>
      <nav>
          <NavLink to='' exact>Home</NavLink> | 
          <NavLink to='/study'>Study</NavLink>
      </nav>
    </div>
  )
}

export default Navigation;