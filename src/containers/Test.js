import { connect } from 'react-redux';
import constants from '../constants';

import {
  checkTest,
  setAnswer,
  submitTest
} from '../actions';

import {
  getFirstPageQuestionNumber,
  getLastPageQuestionNumber,
  getUnansweredQuestionsNumber
} from '../stateHelpers';

import Test from '../components/Test';

/**
 * Filter questions depending on answers
 * 
 * @param {Object} questions 
 * @param {Object} answers 
 * @param {String} filter 
 */
const getVisibleQuestions = (questions = {}, answers = {}, filter) => {
  switch (filter) {
    case constants.QUESTIONS_SHOW_ALL:
      return questions;
    case constants.QUESTIONS_SHOW_UNANSWERED:
      let
        unansweredQuestions = {},
        questionId;
      for (questionId in questions) {
        if (!answers.hasOwnProperty( questionId )) {
          unansweredQuestions[ questionId ] = questions[ questionId ];
        }
      }
      return unansweredQuestions;
    default:
      return questions;
  }
};

const getTestPageQuestions = (questions = {}, currentTestPage, questionsPerPage, state) => {
  const
    testPageQuestions = {},
    questionsIds = Object.keys(questions)
    .slice(
      getFirstPageQuestionNumber( state ) - 1,
      getLastPageQuestionNumber( state )
    )
    .forEach( questionId => {
      testPageQuestions[ questionId ] = questions[ questionId ];
    });
    
  return testPageQuestions;
};

const getQuestions = state => {
  const
    testId = state.test.currentTestId,
    test = state.tests[ testId ];

  if (state.test.isChecking || test.isComplete) {
    return test.test;
  }
  
  return getTestPageQuestions(
    test.test,
    state.test.currentTestPage,
    state.test.questionsPerPage,
    state
   );
}

const mapStateToProps = state => {
  const
    testId = state.test.currentTestId,
    test = state.tests[ testId ];

  return {
    testId,

    didScore: test.didScore,

    isAnswered: Boolean(getUnansweredQuestionsNumber(state) === 0),
    isChecking: state.test.isChecking,
    isFetching: test.isFetching,
    isHaving: state.test.isHaving,
    isScoring: test.isScoring,
    isSubmitting: state.test.isSubmitting,

    answers: test.answers,
    correctAnswers: test.correctAnswers || 0,
    grade: test.grade || '',
    questions: getQuestions(state),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    checkTest: () => { dispatch( checkTest() ) },
    handleSetAnswer: (testId, questionId, answerId) => {dispatch(
      setAnswer(testId, questionId, answerId)
    )},
    submitTest: () => dispatch( submitTest() )
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

export default Connect;