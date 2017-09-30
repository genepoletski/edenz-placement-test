import React from 'react';
import { connect } from 'react-redux';

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
  const
    test = state.tests[ state.test.currentTestId ],
    numberOfQuestions = Object.keys( test.test || {} ).length,
    numberOfAnswers = Object.keys( test.answers || {} ).length;

  return {
    questionsLeft: numberOfQuestions - numberOfAnswers
  }
}

const Connect = connect(
  mapStateToProps
)(QuestionsLeft);

export default Connect;