import types from '../actions/actionTypes';
import answers from './answers';

const tests = (state = {}, action) => {
  switch( action.type ) {

    case types.FINISH_TEST:
      return Object.assign(
        {},
        state,
        {
          [action.payload]: Object.assign(
            {},
            state[action.payload],
            {
              isComplete: true
            }
          )
        }
      );

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

    case types.RECEIVE_TEST_SCORE:
      return Object.assign(
        {},
        state,
        {
          [action.payload]: Object.assign(
            {},
            state[action.payload],
            {
              isScoring: false,
              didScore: true
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

    case types.SAVE_TEST_SCORE:
      return Object.assign(
        {},
        state,
        {
          [action.payload.testId]: Object.assign(
            {},
            state[action.payload.testId],
            {
              grade: action.payload.grade,
              correctAnswers: action.payload.correctAnswers
            }
          )
        }
      )

    case types.SEND_TEST_ANSWERS:
      return Object.assign(
        {},
        state,
        {
          [action.payload]: Object.assign(
            {},
            state[action.payload],
            {
              isScoring: true
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

    case types.SET_TEST:
      return Object.assign(
        {},
        state,
        {
          [action.payload.testId]: action.payload.test
        }
      )

    default:
      return state;
  }
}

export default tests;