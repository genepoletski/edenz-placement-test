import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getFirstPageQuestionNumber,
  getLastPageQuestionNumber,
  getQuestionsNumber
} from '../stateHelpers';

const PaginatorMessage = props => {
  return (
    <div className='test__pagination-info'>
      Page #{props.currentTestPage}, questions {props.firstPageQuestionNumber} - {props.lastPageQuestionNumber} out of {props.questionsNumber}
    </div>
  );
}

PaginatorMessage.propTypes = {
  currentTestPage: PropTypes.number.isRequired,
  firstPageQuestionNumber: PropTypes.number.isRequired,
  lastPageQuestionNumber: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  return {
    currentTestPage: state.test.currentTestPage,
    firstPageQuestionNumber: getFirstPageQuestionNumber( state ),
    lastPageQuestionNumber: getLastPageQuestionNumber( state ),
    questionsNumber: getQuestionsNumber( state )
  }
}

const Connect = connect(mapStateToProps)(PaginatorMessage);

export default Connect;