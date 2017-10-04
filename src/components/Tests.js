import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Test from '../containers/Test';

class Tests extends Component {

  onClickTest(evt) {
    const
      props = this.props,
      requestedTestId = evt.target.id;
    
    evt.preventDefault();
    props.startTest(requestedTestId);
  }
  
  render() {
    const props = this.props;

    let buttonClassName = 'button button--primary button--stacked button--wide tests__test-button';

    if (props.isGrammarTestComplete) {
      buttonClassName += ' button--disabled'
    }

    if (props.currentTestId) {
      return (<Test />);
    }

    return (
      <div className='tests'>
  
        <button
          id='1'
          className={buttonClassName}
          onClick={(evt)=>{this.onClickTest(evt)}}>
          Grammar Test
          {props.isGrammarTestComplete ? (
            <span className='test-button__checkmark'>&#10003;</span>
          ) : (
            ''
          )}
        </button>
  
        <button
          id="2"
          className='button button--primary button--stacked button--wide button--disabled'
          onClick={(evt)=>{this.onClickTest(evt)}}>
          Listening Test
        </button>
  
      </div>
    );
  }
  
}

Tests.propTypes = {
  currentTestId: PropTypes.string.isRequired,
  onSetAnswer: PropTypes.func.isRequired,
  startTest: PropTypes.func.isRequired,
  tests: PropTypes.object
}

export default Tests;