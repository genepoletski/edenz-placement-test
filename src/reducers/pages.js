import types from '../actions/actionTypes';

const pages = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_PAGE:
      return Object.assign(
        {},
        state,
        { currentPage: action.payload }
      )
    default:
      return state;
  }
}

export default pages;