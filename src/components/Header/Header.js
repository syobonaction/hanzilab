import React from 'react';
import Title from './subcomponents/Title/Title';
import Navigation from './subcomponents/Navigation/Navigation';
import './Header.css';

function Header() {
  return(
    <div className='App-header'>
      <Title title='Hanzilab' />
      <Navigation/>
    </div>
  );
};

export default Header;