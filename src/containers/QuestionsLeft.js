import React from 'react';
import { connect } from 'react-redux';

const QuestionsLeft = props => {
  return (
    <span>
      <span>{props.questionsLeft}</span>
      &nbsp;left
    </span>
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