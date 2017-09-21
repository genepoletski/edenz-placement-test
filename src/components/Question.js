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
        <Options questionNumber={props.number} options={props.options} />
      </div>
    </fieldset>
  );
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
}

export default Question;