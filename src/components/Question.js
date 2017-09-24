import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

const Question = props => {
  return (
    <fieldset>
      <div>
        {props.number}
      </div>
      <div>
        <p>{props.text}</p>
        <Options
          onSetAnswer={props.onSetAnswer}
          options={props.options} />
      </div>
    </fieldset>
  );
}

Question.propTypes = {
  onSetAnswer: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default Question;