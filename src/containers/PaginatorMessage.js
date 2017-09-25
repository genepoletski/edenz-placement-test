import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PaginatorMessage = props => {
  return (
    <div>
      Page {props.currentTestPage} with questions {props.firstPageQuestionNumber} - {props.lastPageQuestionNumber}
    </div>
  );
}

PaginatorMessage.propTypes = {
  currentTestPage: PropTypes.number.isRequired,
  firstPageQuestionNumber: PropTypes.number.isRequired,
  lastPageQuestionNumber: PropTypes.number.isRequired
}

const getFirstPageQuestionNumber = ( currentPageNumber, questionsPerPage) => {
  return questionsPerPage * (currentPageNumber  - 1) + 1;
}

const getLastPageQuestionNumber = ( currentPageNumber, questionsPerPage, questionsNumber ) => {
  const maxPossibleQuestionNumber = currentPageNumber * questionsPerPage;
  if (questionsNumber > maxPossibleQuestionNumber) {
    return currentPageNumber * questionsPerPage;
  }
  return questionsNumber;
}

const mapStateToProps = state => {
  const currentTest = state.tests[ state.test.currentTestId ] || {};
  return {
    currentTestPage: state.test.currentTestPage,
    firstPageQuestionNumber: getFirstPageQuestionNumber(
      state.test.currentTestPage,
      state.test.questionsPerPage
    ),
    lastPageQuestionNumber: getLastPageQuestionNumber(
      state.test.currentTestPage,
      state.test.questionsPerPage,
      Object.keys( currentTest.test || {} ).length
    )
  }
}

const Connect = connect(mapStateToProps)(PaginatorMessage);

export default Connect;