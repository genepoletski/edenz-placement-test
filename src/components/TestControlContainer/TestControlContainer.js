import { connect } from 'react-redux';

import {
  offerCheckTest,
  submitTest,
  setTestPage
} from '../../actions';

import {
  getLastTestPage,
  getUnansweredQuestionsNumber
} from '../../stateHelpers';

import TestControl from './TestControl';

const mapStateToProps = state => {
  return {
    isChecking: state.test.isChecking,
    isFilling: state.test.isFilling,
    isSubmitting: state.test.isSubmitting,
    currentTestPage: state.test.currentTestPage,
    lastTestPage: getLastTestPage( state ),
    questionsLeft: getUnansweredQuestionsNumber( state )
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
    offerCheckTest: () => dispatch( offerCheckTest() ),
    submitTest: () => dispatch( submitTest() )
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestControl);

export default Connect;