import { connect } from 'react-redux';

import {
  fetchTest,
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
    setCurrentTest: testId => dispatch( setCurrentTest(testId) )
  }
};

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tests);

export default Connect;