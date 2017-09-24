import types from '../actions/actionTypes';
import answers from './answers';

const tests = (state = {}, action) => {
  switch( action.type ) {

    case types.RECEIVE_TEST:
      return Object.assign(
        {},
        state,
        {
          [action.payload]: Object.assign(
            {},
            state[action.payload],
            {
              isFetching: false
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
            state[action.payload],
            {
              isFetching: true
            }
          )
        }
      );

    case types.SAVE_TEST:
      const mappedTest = {};
      let number = 0;
      for (let questionId in action.payload.test) {
        mappedTest[questionId] = Object.assign(
          {},
          action.payload.test[ questionId ],
          {
            number: String(++number)
          }
        );
      }

      return Object.assign(
        {},
        state,
        {
          [action.payload.id]: Object.assign(
            {},
            state[action.payload.id],
            {
              test: mappedTest
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