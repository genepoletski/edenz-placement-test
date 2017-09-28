import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const Questions = props => {
  const questions = [];
  
  for (let questionId in props.questions) {
    const
      question = props.questions[ questionId ],
      answerId = props.answers[questionId] || '',
      answerText = question.options[ answerId ] || '';

    questions.push(
      <Question
        key={question.number}
        number={String(question.number)}
        onSetAnswer={(answerId)=>{props.onSetAnswer(questionId, answerId);}}
        text={question.text}
        options={question.options}
        answerText={answerText}
        answerId={answerId} />
    );
  }

  return (
    <div className='test__questions'>{questions}</div>
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