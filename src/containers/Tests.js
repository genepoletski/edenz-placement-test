import { connect } from 'react-redux';
import constants from '../constants';
import {
  setAnswer,
  setCurrentTest,
  setVisibilityFilter,
  startTest
} from '../actions';

import Tests from '../components/Tests';

const mapStateToProps = state => {
  return {
    currentTestId: state.test.currentTestId,
    isStarted: state.test.isStarted,
    isGrammarTestComplete: (state.tests['1'] || {}).isComplete,
    isLestiningTestComplete: (state.tests['2'] || state.tests['3'] || state.tests['4'] || {}).isComplete
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSetAnswer: (testId, questionId, answerId) => {dispatch(
      setAnswer(testId, questionId, answerId)
    )},
    setVisibilityFilter: filter => dispatch( setVisibilityFilter(filter) ),
    setCurrentTest: testId => dispatch( setCurrentTest(testId) ),
    startTest: testId => dispatch( startTest( testId ) )
  }
};

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests);

export default Connect;