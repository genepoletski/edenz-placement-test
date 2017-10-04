import React from 'react';
import PropTypes from 'prop-types';

const Next = props => {
  const className = 'control__item' + (props.right ? ' control__item--right' : '');
  
  return (
    <div className={className}>
      <button
        className='button button--secondary'
        onClick={evt=>{
          evt.preventDefault();
          window.scrollTo(0, 0);
          props.handleNext(props.currentTestPage, props.lastTestPage);
        }}>
        Next
      </button>
    </div>
  );
}

Next.propTypes = {
  currentTestPage: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  lastTestPage: PropTypes.number.isRequired,
  right: PropTypes.bool
}

export default Next;