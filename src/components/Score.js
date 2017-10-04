import React from 'react';
import PropTypes from 'prop-types';

const Score = props => {
  return (
    <div>
      <p>You have {props.correctAnswers} correct answers</p>
      <p>Your grade is {props.grade}</p>
    </div>
  );
}

Score.propTypes = {
  correctAnswers: PropTypes.number.isRequired,
  grade: PropTypes.string.isRequired
}

export default Score;