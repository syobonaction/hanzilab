import React from 'react';
import './styles.scss';

function Phrase(props) {
  return (
    <div className='App-phrase'>
      <p>
        {props.phrase.prefix}
        <span className='target'>{props.phrase.target}</span>
        {props.phrase.suffix}
      </p>
    </div>
  );
};

export default Phrase;