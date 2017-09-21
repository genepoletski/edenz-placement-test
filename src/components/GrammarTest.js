import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';
import QuestionsLeft from '../containers/QuestionsLeft';

const GrammarTest = props => {
  if (props.isFetching) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <form>
      { props.test ? 
        <Questions
          onSetAnswer={props.onSetAnswer}
          questions={props.test} /> 
        : '' }
      <div>
        <QuestionsLeft />
        <span>eye</span>
        <button
          className='pure-button pure-button-primary'>submit</button>
      </div>
    </form>
  );
}

GrammarTest.propTypes = {
  isFetching: PropTypes.bool,
  test: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      options: PropTypes.object.isRequired
    })
  )
}

export default GrammarTest;