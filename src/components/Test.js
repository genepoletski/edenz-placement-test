import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestControl from '../containers/TestControl';
import PaginatorMessage from '../containers/PaginatorMessage';
import Questions from './Questions';
import QuestionsLeft from '../containers/QuestionsLeft';

const TestCheck = props => {
  return (
    <div className='test-check__fill'>
      <div className='test-check__container'>
        <div className='test-check'>

          <QuestionsLeft />

          <p>Would you like to:</p>

          <button className='button button--secondary button--wide'>
            Check test before Submit
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

const Test = props => { 
  if (props.isFetching) {
    return (
      <div className='test'>Loading...</div>
    );
  }

  if (props.isHaving) {
    return (
      <form className='test'>
        <PaginatorMessage />
        { props.questions ? 
          <Questions
            onSetAnswer={(questionId, answerId) => {
              props.handleSetAnswer(props.testId, questionId, answerId)}
            }
            questions={props.questions}
            answers={props.answers} />
          : '' }
        <div className='test__control control'>
          <div className='control__container'>
            <TestControl />
          </div>
        </div>
        {props.isSubmitting ? <TestCheck /> : ''}
      </form>
    );
  }
  
}

Test.propTypes = {
  answers: PropTypes.object,
  testId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isHaving: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  questions: PropTypes.object.isRequired
}

export default Test;