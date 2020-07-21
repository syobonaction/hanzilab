import React from 'react';
import Title from './subcomponents/Title/Title';
import './Header.css';

function Header() {
  return(
    <div className='App-header'>
      <Title title='Hanzilab' />
    </div>
  );
};

export default Header;