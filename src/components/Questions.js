import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const Questions = props => {
  const questions = [];

  let key = 0;
  
  for (let questionId in props.questions) {
    key++;
    questions.push(
      <Question
        key={key}
        number={String(key)}
        onSetAnswer={(answerId)=>{props.onSetAnswer(questionId, answerId);}}
        {...props.questions[questionId]} />
    );
  }

  return (
    <div>{questions}</div>
  );
}

Questions.propTypes = {
  onSetAnswer: PropTypes.func.isRequired,
  questions: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      options: PropTypes.object.isRequired
    })
  ).isRequired
}

export default Questions;