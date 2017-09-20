import types from '../actions/actionTypes';

const test = (state = {}, action) => {
  switch( action.type ) {
    case types.SET_CURRENT_TEST:
      return Object.assign(
        {},
        state,
        {
          currentTestId: action.payload
        }
      );
    default:
      return state;
  }
}

export default test;