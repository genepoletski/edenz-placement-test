import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = props => {
  const options = [];

  for (let optionId in props.options) {
    options.push(
      <Option
        id={optionId}
        isSelected={props.answerId === optionId}
        key={optionId}
        questionNumber={props.questionNumber}
        onClick={()=>{props.onSetAnswer(optionId)}}
        text={props.options[ optionId ]} />
    );
  }

  return (
    <div>{options}</div>
  );
}

Options.propTypes = {
  onSetAnswer: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  questionNumber: PropTypes.string.isRequired
}

export default Options;