export const getFirstPageQuestionNumber = state => {
  return state.test.questionsPerPage * (state.test.currentTestPage  - 1) + 1;
};

export const getLastPageQuestionNumber = state => {
  const
    currentPageNumber = state.test.currentTestPage,
    questionsPerPage = state.test.questionsPerPage,
    questionsNumber = getQuestionsNumber( state );

  const maxPossibleQuestionNumber = currentPageNumber * questionsPerPage;
  if (questionsNumber > maxPossibleQuestionNumber) {
    return currentPageNumber * questionsPerPage;
  }
  return questionsNumber;
};

export const getLastTestPage = state => {
  return Math.ceil( getQuestionsNumber( state ) / state.test.questionsPerPage);
}

export const getQuestionsNumber = state => {
  return Object.keys( (state.tests[ state.test.currentTestId ] || {}).test || {}).length;
};