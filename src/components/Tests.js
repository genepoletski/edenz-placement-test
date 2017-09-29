import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Test from '../containers/Test';

class Tests extends Component {

  onClickTest(evt) {
    const
      props = this.props,
      requestedTestId = evt.target.id;
    
    evt.preventDefault();
    if (requestedTestId !== props.currentTestId && !props.isStarted) {
      props.startTest(requestedTestId);
    }
  }
  
  render() {
    const props = this.props;

    if (props.currentTestId) {
      return (<Test />);
    }

    return (
      <div className='tests'>
  
        <button
          id='1'
          className='button button--primary button--narrow-stacked'
          onClick={(evt)=>{this.onClickTest(evt)}}>
          Grammar Test
        </button>
  
        <button
          id="2"
          className='button button--primary button--narrow-stacked button--disabled'
          onClick={(evt)=>{this.onClickTest(evt)}}>
          Listening Test
        </button>
  
      </div>
    );
  }
  
}

Tests.propTypes = {
  currentTestId: PropTypes.string.isRequired,
  isStarted: PropTypes.bool.isRequired,
  onSetAnswer: PropTypes.func.isRequired,
  startTest: PropTypes.func.isRequired
}

export default Tests;