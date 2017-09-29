import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestControl from '../containers/TestControl';
import PaginatorMessage from '../containers/PaginatorMessage';
import Questions from './Questions';

const Test = props => {
  
  if (props.isFetching) {
    return (
      <div className='test'>Loading...</div>
    );
  }

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
    </form>
  );
  
}

Test.propTypes = {
  answers: PropTypes.object,
  testId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool,
  questions: PropTypes.object.isRequired
}

export default Test;