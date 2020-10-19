import React, { useState, useEffect } from 'react';
import cardStore from '../stores/cardStore';
import { loadCards } from '../actions/actions';
import PhraseBox from '../components/PhraseBox/PhraseBox';

function Study() {
  const [card, setCard] = useState({});

  useEffect(() => {
    cardStore.addChangeListener(onChange);
    if (cardStore.getCards().length === 0) loadCards();
    return () => cardStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCard(cardStore.getCard());
  }

  return (
    <section className='study'>
      <PhraseBox card={card}/>
    </section>
  )
}

export default Study;