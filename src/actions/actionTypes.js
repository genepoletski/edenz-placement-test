const typeNames = [
  'ADD_STUDENT',
  'FETCH_TEST',
  'RECEIVE_TEST',
  'REQUEST_TEST',
  'SAVE_TEST',
  'SET_ANSWER',
  'SET_CURRENT_PAGE',
  'SET_CURRENT_TEST',
  'SET_VISIBILITY_FILTER',
  'SHOW_TEST_PAGE',
  'SUBMIT_STUDENT',
  'UPDATE_STUDENT'
]

const types = {};

typeNames.forEach( typeName => {
  types[typeName] = typeName;
});

export default types;