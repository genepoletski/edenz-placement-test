import constants from '../constants';
import types from '../actions/actionTypes';

const user = (state = {}, action) => {
  switch(action.type) {
    case types.ADD_STUDENT:
      return Object.assign(
        {},
        { type: constants.USER_TYPE_STUDENT },
        action.payload
      );
    case types.SUBMIT_STUDENT:
      return Object.assign(
        {},
        state,
        { isLogged: true }
      );
    case types.UPDATE_STUDENT:
      return Object.assign(
        {},
        state,
        action.payload
      );
    default:
      return state;
  }
}

export default user;