import React from 'react';
import TextBox from './subcomponents/TextBox/TextBox';
import Phrase from './subcomponents/Phrase/Phrase';
import SubCategory from './subcomponents/SubCategory/SubCategory';
import './styles.scss';

function PhraseBox(props) {
  const textBoxProps = {
    id: 'test',
    name: 'test',
    answer: props.phrase.targetPinyin,
    getPhrase: props.getPhrase,
  };

  return (
    <div className='App-phraseBox'>
      <div className='contents'>
        <Phrase phrase={props.phrase}/>
        <SubCategory text={props.phrase.phraseMeaning}/>
        <TextBox {...textBoxProps} />
      </div>
    </div>
  );
};

export default PhraseBox;