import types from '../actions/actionTypes';

import {
  fetchTest,
  finishTestFill,
  setCurrentTest,
  setTest,
  startTestFill
} from '../actions/index';

const initialTestState = {
  didScore: false,
  isFetching: false,
  isScoring: false,
  test: {},
  answers: {}
};

const testController = store => next => action => {
  const dispatch = store.dispatch;
  let state = store.getState();

  switch (action.type) {
    case types.RECEIVE_TEST:
      if (String(action.payload) === String(state.test.currentTestId)) {
        dispatch( startTestFill() );
      }
      break;

    case types.FINISH_TEST:
      break;

    case types.SCORE_TEST:
      break;

    case types.START_TEST:
      let testId = action.payload;

      if ( !state.tests[ action.testId ] ) {
        dispatch( setTest(testId, initialTestState) );
        state = store.getState();
      }

      if ( Object.keys(state.tests[ testId ].test).length === 0 ) {
        dispatch( fetchTest( testId ) );
      } else {
        dispatch( startTestFill() );
      }

      dispatch( setCurrentTest( testId ) );
      break;

    case types.SUBMIT_TEST:
      break;

    default:
      break;
  }

  return next(action);
}

export default testController;