import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';
import actionTypes from '../actions/types';

const CHANGE_EVENT = 'change';
let _cards = [];

class CardStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCards() {
    return _cards;
  }

  getCard() {
    return _cards[Math.floor(Math.random() * _cards.length)]
  }
}

const store = new CardStore();

Dispatcher.register(action => {
  switch(action.actionType) {
    case actionTypes.LOAD_CARDS:
      _cards = action.cards;
      store.emitChange();
      break;
    case actionTypes.ANSWER_SUBMITTED:
      action.isSubmissionCorrect
        ? alert('correct')
        : alert('incorrect');
      store.emitChange();
      break;
    default:
      break;
  }
});

export default store;