import { connect } from 'react-redux';
import constants from '../constants';
import {
  fetchTest,
  setAnswer
} from '../actions';

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
}

const mapStateToProps = state => {
  const
    testId = state.test.currentTestId,
    test = state.tests[ testId ] || {};
    
  return {
    testId,
    isFetching: test.isFetching,
    questions: getVisibleQuestions( 
      test.test,
      test.answers,
      state.test.visibilityFilter
     )
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTest: testId => dispatch( fetchTest(testId) ),
    handleSetAnswer: (testId, questionId, answerId) => {dispatch(
      setAnswer(testId, questionId, answerId)
    )},
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

export default Connect;