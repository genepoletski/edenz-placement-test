import types from '../actions/actionTypes';
import answers from './answers';

const tests = (state = {}, action) => {
  switch( action.type ) {
    case types.RECEIVE_TEST:
      return Object.assign(
        {},
        state,
        {
          [action.payload.id]: Object.assign(
            {},
            state[action.payload.id],
            {
              isFetching: false,
              test: action.payload.test
            }
          )
        }
      );
    case types.REQUEST_TEST:
      return Object.assign(
        {},
        state,
        {
          [action.payload]: Object.assign(
            {},
            state[ action.payload ],
            {
              isFetching: true
            }
          )
        }
      );
    case types.SET_ANSWER:
      return Object.assign(
        {},
        state,
        {
          [action.payload.testId]: Object.assign(
            {},
            state[action.payload.testId],
            {
              answers: answers(state[action.payload.testId].answers, action)
            }
          )
        }
      );
    default:
      return state;
  }
}

export default tests;