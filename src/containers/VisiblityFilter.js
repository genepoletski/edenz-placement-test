import React from 'react';
import { connect } from 'react-redux';
import constants from '../constants';
import { setVisibilityFilter } from '../actions';

const VisibilityFilter = props => {
  let text;

  switch (props.filter) {
    case constants.QUESTIONS_SHOW_ALL:
      text = 'A';
      break;
    case constants.QUESTIONS_SHOW_UNANSWERED:
      text = 'U';
      break;
    default:
      text = 'A';
      break;
  }

  return (
    <span
      onClick={() => {
        if (props.filter === constants.QUESTIONS_SHOW_ALL) {
          props.handleClick(constants.QUESTIONS_SHOW_UNANSWERED);
        }
        else {
          props.handleClick(constants.QUESTIONS_SHOW_ALL);
        }     
      }}>
      {text}</span>
  );
}

const mapStateToProps = state => {
  return {
    filter: state.test.visibilityFilter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick: filter => dispatch( setVisibilityFilter(filter) )
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilter);

export default Connect;