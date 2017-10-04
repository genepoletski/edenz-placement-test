import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestControlContainer from './TestControlContainer/TestControlContainer';
import TestScore from './TestScore/TestScore';
import PaginatorMessage from '../containers/PaginatorMessage';
import Questions from './Questions';
import TestCheck from './TestCheck';

const Test = props => { 
  if (props.isFetching) {
    return (
      <div className='test'>Loading...</div>
    );
  }

  if (props.isScoring) {
    return (
      <div className='test'>Checking...</div>
    );
  }

  if (props.didScore) {
    return (
      <div>
        <TestScore correctAnswers={props.correctAnswers}  grade={props.grade} />
        <TestControlContainer />
      </div>
    );
  }

  if (true) {
    return (
      <form className='test'>
        {props.isHaving ? <PaginatorMessage /> : ''}       
        {props.questions ? 
          <Questions
            onSetAnswer={(questionId, answerId) => {
              props.handleSetAnswer(props.testId, questionId, answerId)}
            }
            questions={props.questions}
            answers={props.answers} />
          : '' }
        <TestControlContainer />
        { props.isSubmitting && props.isHaving
          || props.isSubmitting && props.isChecking && !props.isAnswered ? (
          <TestCheck
            checkTest={props.checkTest}
            isAnswered={props.isAnswered}
            isChecking={props.isChecking}
            isHaving={props.isHaving}
            submitTest={props.submitTest} />
        ) : (
          ''
        )}
      </form>
    );
  }
  
}

Test.propTypes = {
  
  checkTest: PropTypes.func.isRequired,
  submitTest: PropTypes.func.isRequired,

  didScore: PropTypes.bool,
  
  isAnswered: PropTypes.bool.isRequired,
  isChecking: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isHaving: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,

  answers: PropTypes.object,
  correctAnswers: PropTypes.number.isRequired,
  grade: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
  testId: PropTypes.string.isRequired

}

export default Test;