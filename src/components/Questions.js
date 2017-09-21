import React from 'react';
import PropTypes from 'prop-types';

const Questions = props => {
  const questions = [];
  
  for (let id in props.questions) {
    questions.push(<div key={id}>{props.questions[id].text}</div>)
  }

  return (
    <div>{questions}</div>
  );
}

Questions.propTypes = {
  questions: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      options: PropTypes.object.isRequired
    })
  ).isRequired
}

export default Questions;