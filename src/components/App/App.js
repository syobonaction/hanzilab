import React from 'react';
import Header from '../Header/Header';
import PhraseBox from '../PhraseBox/PhraseBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <PhraseBox />
      </div>
    </div>
  );
}

export default App;