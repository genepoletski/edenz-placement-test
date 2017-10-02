const typeNames = [
  'ADD_STUDENT',
  'CHECK_TEST',
  'DO_AFTER_RECEIVE',
  'FETCH_TEST',
  'FINISH_TEST',
  'FINISH_TEST_CHECK',
  'FINISH_TEST_FILL',
  'RECEIVE_TEST',
  'REQUEST_TEST',
  'SAVE_TEST',
  'SET_ANSWER',
  'SET_CURRENT_PAGE',
  'SET_CURRENT_TEST',
  'SET_TEST',
  'SET_TEST_PAGE',
  'SET_VISIBILITY_FILTER',
  'SHOW_TEST_PAGE',
  'START_TEST',
  'START_TEST_CHECK',
  'SUBMIT_STUDENT',
  'SUBMIT_TEST',
  'UPDATE_STUDENT'
]

const types = {};

typeNames.forEach( typeName => {
  types[typeName] = typeName;
});

export default types;