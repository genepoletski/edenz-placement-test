import React from 'react';
import PropTypes from 'prop-types';

const GrammarTest = props => {
  
  if (props.isFetching === true) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>GrammarTest</div>
  );
}

GrammarTest.propTypes = {
  isFetching: PropTypes.bool
}

export default GrammarTest;