import {
  USER_TYPE_STUDENT
} from '../constants';

import {
  ADD_STUDENT,
  UPDATE_STUDENT
} from '../actions/actionTypes';

const user = (state = {}, action) => {
  switch(action.type) {
    case ADD_STUDENT:
      return Object.assign(
        {},
        {
          type: USER_TYPE_STUDENT
        },
        action.payload
      );
    case UPDATE_STUDENT:
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