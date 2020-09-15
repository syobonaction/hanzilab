import React, { useState } from 'react';
import './styles.scss';

function TextBox(props) {
  const [answer, setAnswer] = useState(props.answer);
  const [validated, setValidated] = useState(null);
  let toneAppliedCharacters = [
    ['','ā','ē','ī','ō','ū'],
    ['','á','é','í','ó','ú'],
    ['','ǎ','ě','ǐ','ǒ','ǔ'],
    ['','à','è','ì','ò','ù'],
    ['','','','','','ǚ']
  ]

  function handleKeyDown(e) {
    let enteredValue = e.target.value;
    let isAlphaNumeric = /^[a-zA-Z0-9 ']*$/i.test(e.key);

    if(isAlphaNumeric) {
      switch(e.key) {
        case 'Enter':
          validateSubmission(enteredValue);
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
          e.preventDefault();
          e.target.value = formatInput(enteredValue, toneAppliedCharacters[e.key - 1]);
          break;
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
          e.preventDefault();
        default:
          break;
      }
    } else {
      e.preventDefault();
    }
  };
  
  function validateSubmission(enteredValue) {
    if(answer===enteredValue) {
      console.log('correct!');
      setValidated(true);
      props.getPhrase();
    } else {
      console.log('incorrect!');
      setValidated(false);
    }
  };

  function formatInput(enteredValue, toneList) {
    let character = enteredValue[enteredValue.length - 1];
    let toneAppliedCharacter = toneList[applyTones(character)];
    let newValue = toneAppliedCharacter ? enteredValue.slice(0, -1) + toneAppliedCharacter : enteredValue;
    return newValue;
  };

  function applyTones(character) {
    switch(character) {
      case 'a':
      case 'ā':
      case 'á':
      case 'ǎ':
      case 'à':
        return 1;
      case 'e':
      case 'ē':
      case 'é':
      case 'ě':
      case 'è':
        return 2;
      case 'i':
      case 'ī':
      case 'í':
      case 'ǐ':
      case 'ì':
        return 3;
      case 'o':
      case 'ō':
      case 'ó':
      case 'ǒ':
      case 'ò':
        return 4;
      case 'u':
      case 'ū':
      case 'ú':
      case 'ǔ':
      case 'ù':
      case 'ǚ':
        return 5;
      default:
        return 0;
    }
  }

  return (
    <div className='textBox'>
      <input 
        id={props.id}
        className={validated ? 'valid' : 'invalid'}
        name={props.name} 
        value={props.value}
        onKeyDown={handleKeyDown}
      ></input>
      <label htmlFor={props.id}></label>
    </div>
  );
};

export default TextBox;