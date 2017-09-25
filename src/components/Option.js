import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Option = props => {
  return (
    <label>
      <input
        type='radio'
        name={props.questionNumber}
        onClick={props.onClick}
        onChange={()=>{}}
        checked={props.isSelected} />
      {props.text}
    </label>
  );
}

export default Option;