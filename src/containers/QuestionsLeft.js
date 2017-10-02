import React from 'react';
import { connect } from 'react-redux';
import { getUnansweredQuestionsNumber } from '../stateHelpers';

const QuestionsLeft = props => {
  if (props.questionsLeft !== 0) {
    return (
      <span>
        You have&nbsp;
        <span className='badge'>{props.questionsLeft}</span>
        &nbsp;unanswered questions!
      </span>
    );
  }
  return (
    <span>You have answered all questions.</span>
  );
}

const mapStateToProps = state => {
  return {
    questionsLeft: getUnansweredQuestionsNumber(state)
  }
}

const Connect = connect(
  mapStateToProps
)(QuestionsLeft);

export default Connect;