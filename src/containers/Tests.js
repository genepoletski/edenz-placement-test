import { connect } from 'react-redux';

import {
  fetchTest,
  setAnswer,
  setCurrentTest
} from '../actions';

import Tests from '../components/Tests';

const mapStateToProps = state => {
  return {
    currentTestId: state.test.currentTestId,
    isStarted: state.test.isStarted,
    tests: state.tests
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTest: testId => dispatch( fetchTest(testId) ),
    onSetAnswer: (testId, questionId, answerId) => {dispatch(
      setAnswer(testId, questionId, answerId)
    )},
    setCurrentTest: testId => dispatch( setCurrentTest(testId) )
  }
};

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests);

export default Connect;