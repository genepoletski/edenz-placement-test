import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Option = props => {
  let
    optionClassName = 'question__option',
    optionTextClassName = '';
  
  if (props.isSelected) {
    optionClassName += ' question__option--selected';
    optionTextClassName = 'question__answer--selected';
  }

  return (
    <label className={optionClassName}>
      <input
        className='option--radio'
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