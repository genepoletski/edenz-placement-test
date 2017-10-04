import React from 'react';
import PropTypes from 'prop-types';

const TestScore = props => {
  return (
    <div>
      <p>You have {props.correctAnswers} correct answers</p>
      <p>Your grade is {props.grade}</p>
    </div>
  );
}

TestScore.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  grade: PropTypes.string.isRequired
}

export default TestScore;