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
        prefix: '今天早上的',
        suffix: '不好'
      }
    ]
    return phrases[0];
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