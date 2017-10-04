import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Next from './Next';
import Prev from './Prev';
import Submit from './Submit';

const TestControl = props => {
  let
    leftControl = null,
    rightControl = null;

  if (props.isChecking) {
    rightControl = <Submit handleSubmit={props.handleSubmit} right />;
  }
  else if (props.currentTestPage === 1) {
    rightControl = <Next {...props} right />;
  }
  else if (props.currentTestPage === props.lastTestPage) {
    leftControl = <Prev {...props} />;
    rightControl = <Submit handleSubmit={props.handleSubmit} />;
  }
  else {
    leftControl = <Prev {...props} />;
    rightControl = <Next {...props} />;
  }

  return (
    <div className='test__control control'>
      <div className='control__container'>
        {leftControl}
        {rightControl}
      </div>
    </div>
  );
}

TestControl.propTypes = {
  currentTestPage: PropTypes.number.isRequired,
  isChecking: PropTypes.bool.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  lastTestPage: PropTypes.number.isRequired
}

export default TestControl;