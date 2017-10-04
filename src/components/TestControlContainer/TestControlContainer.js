import { connect } from 'react-redux';

import {
  submitTest,
  setTestPage
} from '../../actions';

import {
  getLastTestPage
} from '../../stateHelpers';

import TestControl from './TestControl';

const mapStateToProps = state => {
  return {
    isChecking: state.test.isChecking,
    currentTestPage: state.test.currentTestPage,
    lastTestPage: getLastTestPage( state )
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleNext: (currentTestPage, lastTestPage) => {
      if (currentTestPage !== lastTestPage) {
        dispatch(setTestPage(++currentTestPage));
      }
    },
    handlePrev: currentTestPage => {
      if (currentTestPage === 1) return;
      dispatch(setTestPage(--currentTestPage));
    },
    handleSubmit: testId => dispatch( submitTest( testId ) )
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestControl);

export default Connect;