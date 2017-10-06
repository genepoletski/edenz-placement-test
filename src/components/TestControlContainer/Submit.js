import React from 'react';
import PropTypes from 'prop-types';

const Submit = props => {
  const className = 'control__item' + (props.right ? ' control__item--right' : '');

  return (
    <div className={className}>
      <button
        className='button button--success'
        onClick={evt =>{props.handleSubmit(evt);}}>
        Submit
      </button>
    </div>
  );
}

Submit.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Submit;