import React from 'react';
import PropTypes from 'prop-types';

const Options = props => {
  const options = [];

  let
    key = 0;

  for (let optionId in props.options) {
    key++;
    options.push(
      <label key={key}>
        <input
          name={props.questionNumber}
          onClick={()=>{props.onSetAnswer(optionId);}}
          type='radio'/>
          {props.options[optionId]}
      </label>
    );
  }

  return (
    <div>{options}</div>
  );
}

Options.propTypes = {
  onSetAnswer: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
}

export default Options;