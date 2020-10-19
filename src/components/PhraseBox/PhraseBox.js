import React from 'react';
import TextBox from './subcomponents/TextBox/TextBox';
import Phrase from './subcomponents/Phrase/Phrase';
import SubCategory from './subcomponents/SubCategory/SubCategory';
import './styles.scss';

function PhraseBox(props) {
  const textBoxProps = {
    id: 'test',
    name: 'test',
    answer: props.card.targetPinyin,
  };

  return (
    <div className='App-phraseBox'>
      <div className='contents'>
        <Phrase phrase={props.card}/>
        <SubCategory text={props.card.phraseMeaning}/>
        <TextBox {...textBoxProps} />
      </div>
    </div>
  );
};

export default PhraseBox;