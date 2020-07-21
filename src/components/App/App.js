import React from 'react';
import Header from '../Header/Header';
import PhraseBox from '../PhraseBox/PhraseBox';
import './App.css';

function App() {
  function getPhrase() {
    const phrases = [
      {
        target: '天气',
        targetPinyin: 'tiānqì',
        meaning: 'weather',
        phrasePinyin: 'Jīntiān zǎoshàng de tiānqì bù hǎo',
        phraseMeaning: 'The weather this morning is not good.',
        prefix: '今天早上的',
        suffix: '不好'
      },
      {
        target: '今天',
        targetPinyin: 'jīntiān',
        meaning: 'today',
        phrasePinyin: 'Jīntiān zǎoshàng de tiānqì bù hǎo',
        phraseMeaning: 'The weather this morning is not good.',
        prefix: '',
        suffix: '早上的天气不好'
      },
      {
        target: '早上',
        targetPinyin: 'zǎoshàng',
        meaning: 'morning',
        phrasePinyin: 'Jīntiān zǎoshang de tiānqì bù hǎo',
        phraseMeaning: 'The weather this morning is not good.',
        prefix: '今天',
        suffix: '的天气不好'
      },
    ]
    return phrases[Math.floor(Math.random() * 3)];
  };

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <PhraseBox phrase={getPhrase()}/>
      </div>
    </div>
  );
}

export default App;