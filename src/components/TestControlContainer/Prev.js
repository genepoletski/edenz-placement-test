import React from 'react';
import PropTypes from 'prop-types';

const Prev = props => {
  return (
    <div className='control__item'>
      <button
        className='button button--secondary'
        onClick={evt=>{
          evt.preventDefault();
          window.scrollTo(0, 0);
          props.handlePrev(props.currentTestPage);
        }}>
        Prev
      </button>
    </div>
  );
}

Prev.propTypes = {
  currentTestPage: PropTypes.number.isRequired,
  handlePrev: PropTypes.func.isRequired
}

export default Prev;