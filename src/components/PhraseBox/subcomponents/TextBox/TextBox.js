import React, { useState } from 'react';
import './styles.scss';

function TextBox(props) {
  const [answer, setAnswer] = useState(props.answer);
  const [validated, setValidated] = useState(null);

  function handleKeyDown(e) {
    let enteredValue = e.target.value;
    let isAlphaNumeric = /^[a-z0-9]+$/i.test(e.key);

    if(isAlphaNumeric) {
      switch(e.key) {
        case 'Enter':
          validateSubmission(enteredValue);
          break;
        case '1':
          e.preventDefault();
          e.target.value = formatInput(enteredValue, applyFirstTones);
          break;
        case '2':
          e.preventDefault();
          e.target.value = formatInput(enteredValue, applySecondTones);
          break;
        case '3':
          e.preventDefault();
          e.target.value = formatInput(enteredValue, applyThirdTones);
        case '4':
          e.preventDefault();
          e.target.value = formatInput(enteredValue, applyFourthTones);
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
    } else {
      console.log('incorrect!');
      setValidated(false);
    }
  };

  function formatInput(enteredValue, applyTones) {
    let character = enteredValue[enteredValue.length - 1];
    let toneAppliedCharacter = applyTones(character);
    let newValue = toneAppliedCharacter ? enteredValue.slice(0, -1) + toneAppliedCharacter : enteredValue;
    return newValue;
  };

  function applyFirstTones(character) {
    switch(character) {
      case 'a':
        return 'ā';
      case 'e':
        return 'ē';
      case 'i':
        return 'ī';
      case 'o':
        return 'ō';
      case 'u':
        return 'ū';
      default:
        return false;
    }
  };

  function applySecondTones(character) {
    switch(character) {
      case 'a':
        return 'á';
      case 'e':
        return 'é';
      case 'i':
        return 'í';
      case 'o':
        return 'ó';
      case 'u':
        return 'ú';
      default:
        return false;
    }
  };

  function applyThirdTones(character) {
    switch(character) {
      case 'a':
        return 'ǎ';
      case 'e':
        return 'ě';
      case 'i':
        return 'ǐ';
      case 'o':
        return 'ǒ';
      case 'u':
        return 'ǔ';
      default:
        return false;
    }
  };

  function applyFourthTones(character) {
    switch(character) {
      case 'a':
        return 'à';
      case 'e':
        return 'è';
      case 'i':
        return 'ì';
      case 'o':
        return 'ò';
      case 'u':
        return 'ù';
      default:
        return false;
    }
  };

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