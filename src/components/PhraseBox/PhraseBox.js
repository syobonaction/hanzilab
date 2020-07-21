import React from 'react';
import TextBox from './subcomponents/TextBox/TextBox';
import Phrase from './subcomponents/Phrase/Phrase';
import './styles.scss';

function PhraseBox(props) {
  return (
    <div className='App-phraseBox'>
      <div className='contents'>
        <Phrase phrase={props.phrase}/>
        <TextBox id='test' name='test' answer={props.phrase.targetPinyin}/>
      </div>
    </div>
  );
};

export default PhraseBox;