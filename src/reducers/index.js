import { combineReducers } from 'redux';
import test from './test';
import tests from './tests';
import user from './user';

const initialState = {
  user: {
    type: '',
    name: '',
    email: '',
    password: ''
  },
  test: {
    id: ''
  },
  tests: {
    '1': {
      data: {},
      type: '',
      isComplete: false,
      isFetching: false
    }
  }
}

// const app = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// }

const app = combineReducers({
  test,
  tests,
  user
});

export default app;