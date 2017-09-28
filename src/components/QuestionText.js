import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

const QuestionText = props => {
  if (!props.answerText) { 
    return (
      <p className='question__text'>{props.text}</p>
    );
  }

  const placeholder = props.text.match(/(_+)/)[0];
  const strParts = props.text.split(placeholder);

  return (
    <p className='question__text'>
      {strParts[0]}<span className='question__answer'>&nbsp;{props.answerText}&nbsp;</span>{strParts[1]}
    </p>
  );
}

QuestionText.propTypes = {
  answerText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default QuestionText;