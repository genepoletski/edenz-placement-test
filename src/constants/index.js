const constantNames = [
  'QUESTIONS_SHOW_ALL',
  'QUESTIONS_SHOW_UNANSWERED',
  'TEST_TYPE_GRAMMAR',
  'TEST_TYPE_LISTENING',
  'USER_TYPE_STUDENT'
]

const constants = {};

constantNames.forEach( constantName => {
  constants[constantName] = constantName;
});

export default constants;