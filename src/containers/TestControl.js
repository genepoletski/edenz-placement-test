import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  submitTest,
  setTestPage
} from '../actions';
import {
  getLastTestPage
} from '../stateHelpers';

const Next = props => {
  return (
    <button
      className='button button--secondary'
      onClick={evt=>{
        evt.preventDefault();
        window.scrollTo(0, 0);
        props.handleNext(props.currentTestPage, props.lastTestPage);
      }}>
      Next
    </button>
  );
}

const Prev = props => {
  return (
    <button
      className='button button--secondary'
      onClick={evt=>{
        evt.preventDefault();
        window.scrollTo(0, 0);
        props.handlePrev(props.currentTestPage);
      }}>
      Prev
    </button>
  );
}

const TestControl = props => {  
  if (props.currentTestPage === 1) {
    return (
      <div>
        <div className='control__item control__item--right'>
          <Next {...props} />
        </div>
      </div>
    );
  }
  else if (props.currentTestPage === props.lastTestPage) {
    return (
      <div>
        <div className='control__item'>
          <Prev {...props} />
        </div>
        <div className='control__item'>
          <button
            className='button button--success'
            onClick={evt =>{
              evt.preventDefault();
              props.submitTest();
            }}>Submit</button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <div className='control__item'>
          <Prev {...props} />
        </div>
        <div className='control__item'>
          <Next {...props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTestPage: state.test.currentTestPage,
    lastTestPage: getLastTestPage( state )
  };
}

const mapDispatchToProps = dispatch => {
  return {
    submitTest: testId => dispatch( submitTest( testId ) ),
    handleNext: (currentTestPage, lastTestPage) => {
      if (currentTestPage !== lastTestPage) {
        dispatch(setTestPage(++currentTestPage));
      }
    },
    handlePrev: currentTestPage => {
      if (currentTestPage === 1) return;
      dispatch(setTestPage(--currentTestPage));
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestControl);

export default Connect;