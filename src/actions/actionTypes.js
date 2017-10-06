const typeNames = [
  'ADD_STUDENT',
  'CHECK_TEST', //
  'FETCH_TEST',
  'FINISH_TEST',
  'FINISH_TEST_CHECK',
  'FINISH_TEST_FILL',
  'OFFER_CHECK_TEST', //
  'RECEIVE_TEST', //
  'RECEIVE_TEST_SCORE',
  'REQUEST_TEST', //
  'SAVE_TEST', //
  'SAVE_TEST_SCORE',
  'SCORE_TEST',
  'SEND_TEST_ANSWERS',
  'SET_ANSWER', //
  'SET_CURRENT_PAGE', //
  'SET_CURRENT_TEST', //
  'SET_TEST', //
  'SET_TEST_PAGE', //
  'SET_VISIBILITY_FILTER',
  'SHOW_TEST_PAGE',
  'START_TEST', //
  'START_TEST_CHECK',
  'START_TEST_FILL', //
  'SUBMIT_STUDENT', //
  'SUBMIT_TEST', //
  'UPDATE_STUDENT'
]

const types = {};

typeNames.forEach( typeName => {
  types[typeName] = typeName;
});

export default types;