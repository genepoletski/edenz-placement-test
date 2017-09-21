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
    <div>
      { props.test ? <Questions questions={props.test} /> : '' }
    </div>
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