import React from 'react';
import PropTypes from 'prop-types';
import QuestionText from './QuestionText';
import Options from './Options';

const Question = props => {
  return (
    <fieldset className='test__question'>
      <div className='question__number'>
        {props.number}
      </div>
      <div>
        <QuestionText
          text={props.text}
          answerText={props.answerText} />

        <Options
          questionNumber={props.number}
          onSetAnswer={props.onSetAnswer}
          options={props.options}
          answerId={props.answerId} />
      </div>
    </fieldset>
  );
}

Question.propTypes = {
  answerId: PropTypes.string.isRequired,
  onSetAnswer: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default Question;