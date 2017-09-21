import React from 'react';
import PropTypes from 'prop-types';

const Options = props => {
  const options = [];

  let
    key = 0,
    optionId;

  for (optionId in props.options) {
    key++;
    options.push(
      <label key={key}>
        <input name={props.questionNumber} type='radio'/>{props.options[optionId]}
      </label>
    );
  }

  return (
    <div>{options}</div>
  );
}

Options.propTypes = {
  questionNumber: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
}

export default Options;