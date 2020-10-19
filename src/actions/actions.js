import dispatcher from '../dispatcher';
import actionTypes from './types';

export function loadCards() {
  return fetch('/api/cards')
    .then((response) => response.json())
    .then(response => {
      dispatcher.dispatch({
        actionType: actionTypes.LOAD_CARDS,
        cards: response.cards,
      });
    });
}

export function handleSubmission(isSubmissionCorrect) {
  return dispatcher.dispatch({
    actionType: actionTypes.ANSWER_SUBMITTED,
    isSubmissionCorrect,
  });
}