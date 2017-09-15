const typeNames = [
  'ADD_STUDENT',
  'FETCH_TEST',
  'SAVE_TEST',
  'SET_CURRENT_PAGE',
  'SHOW_TEST_PAGE',
  'SUBMIT_STUDENT',
  'UPDATE_STUDENT'
]

const types = {};

typeNames.forEach( typeName => {
  types[typeName] = typeName;
});

export default types;