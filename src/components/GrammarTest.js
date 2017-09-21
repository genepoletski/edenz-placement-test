import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions';

const GrammarTest = props => {
  if (props.isFetching) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <form>
      { props.test ? <Questions questions={props.test} /> : '' }
      <div>
        <span><span>45</span> left</span>
        <span>eye</span>
        <button>submit</button>
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