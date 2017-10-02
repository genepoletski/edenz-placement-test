import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionsLeft from '../containers/QuestionsLeft';

const TestCheck = props => {
  return (
    <div className='test-check__fill'>
      <div className='test-check__container'>
        <div className='test-check'>

          <QuestionsLeft />

          <p>Would you like to:</p>

          <button
            className='button button--secondary button--wide'
            onClick={evt => {
              evt.preventDefault();
              props.checkTest();
            }}>
            {props.isHaving ? (
              'Check test before Submit'
            ) : (
              'Answer the questions'
            )}
            
          </button>

          <p>or</p>

          <button
            className='button button--success button--wide'
            onClick={evt =>{
              evt.preventDefault();
              props.submitTest();
            }}>
            Submit test anyway
          </button>

        </div>
      </div>
    </div>
  );
}

TestCheck.propTypes = {
  isAnswered: PropTypes.bool.isRequired,
  isChecking: PropTypes.bool.isRequired,
  isHaving: PropTypes.bool.isRequired,
  checkTest: PropTypes.func.isRequired,
  submitTest: PropTypes.func.isRequired
}

export default TestCheck;