import types from '../actions/actionTypes';
import {
  fetchTest,
  requestTest,
  setCurrentTest,
  setTest
} from '../actions';

const initialTestState = {
  isFetching: false,
  test: {},
  answers: {}
};

const testController = store => next => action => {
  const dispatch = store.dispatch;

  switch (action.type) {

    case types.FINISH_TEST:
      break;

    case types.START_TEST:
      const
        testId = action.payload,
        state = store.getState(),
        test = state.tests[ testId ];

      // Create new test in a store if needed
      if (!test) {
        dispatch( setTest(testId, initialTestState) );
      }

      const questions = store.getState().tests[ testId ].test;

      // Check if questions are stored
      if (Object.keys(questions).length === 0) {
        dispatch( fetchTest(testId) );
      }

      dispatch( setCurrentTest(testId) );
      break;

    default:
      break;

  }

  return next(action);
}

export default testController;