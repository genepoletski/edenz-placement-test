import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Next from './Next';
import Prev from './Prev';
import Submit from './Submit';

class TestControl extends Component {
  handleCheckTest(evt) {
    props.checkTest();
  }

  handleSubmit(evt) {
    const props = this.props;
    evt.preventDefault();

    if (props.isSubmitting || props.isChecking && props.questionsLeft === 0) {
      props.submitTest();
    }
    else {
      props.offerCheckTest();
    }
  }

  render() {
    const props = this.props;
    let
      leftControl = null,
      rightControl = null;

    if (props.isChecking) {
      rightControl = <Submit handleSubmit={evt => {this.handleSubmit(evt)}} right />;
    }
    else if (props.currentTestPage === 1) {
      rightControl = <Next {...props} right />;
    }
    else if (props.currentTestPage === props.lastTestPage) {
      leftControl = <Prev {...props} />;
      rightControl = <Submit handleSubmit={evt => {this.handleSubmit(evt)}} />;
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
}

TestControl.propTypes = {
  currentTestPage: PropTypes.number.isRequired,
  isChecking: PropTypes.bool.isRequired,
  isFilling: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  offerCheckTest: PropTypes.func.isRequired,
  lastTestPage: PropTypes.number.isRequired,
  questionsLeft: PropTypes.number.isRequired,
  submitTest: PropTypes.func.isRequired
}

export default TestControl;