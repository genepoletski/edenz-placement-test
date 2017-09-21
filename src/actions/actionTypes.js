const typeNames = [
  'ADD_STUDENT',
  'FETCH_TEST',
  'RECEIVE_TEST',
  'REQUEST_TEST',
  'SELECT_OPTION',
  'SET_CURRENT_PAGE',
  'SET_CURRENT_TEST',
  'SHOW_TEST_PAGE',
  'SUBMIT_STUDENT',
  'UPDATE_STUDENT'
]

const types = {};

typeNames.forEach( typeName => {
  types[typeName] = typeName;
});

export default types;