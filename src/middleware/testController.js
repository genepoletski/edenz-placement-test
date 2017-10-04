import types from '../actions/actionTypes';

import {
  doAfterReceive,
  fetchTest,
  finishTest,
  finishTestCheck,
  finishTestFill,
  requestTest,
  scoreTest,
  sendTest,
  setCurrentTest,
  setTest,
  startTestCheck
} from '../actions';

import {
  getUnansweredQuestionsNumber
} from '../stateHelpers.js';

const initialTestState = {
  didScore: false,
  isFetching: false,
  isScoring: false,
  test: {},
  answers: {}
};

const testController = store => next => action => {
  const dispatch = store.dispatch;

  switch (action.type) {
    case types.CHECK_TEST:
      dispatch( startTestCheck() );
      break;

    case types.FINISH_TEST:
      dispatch( setCurrentTest('') );
      break;

    case types.RECEIVE_TEST:
      dispatch( doAfterReceive() );
      break;
    
    case types.SCORE_TEST:
      {
        const
          state = store.getState(),
          testId = state.test.currentTestId,
          answers = state.tests[ testId ].answers;
        
        dispatch( sendTest(testId, answers) );
      }
      break;

    case types.START_TEST:
      {
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
        if (Object.keys(questions).length === 0
            && !store.getState().tests[ testId ].test.isFetching) {
          dispatch( fetchTest(testId) );
        }

        dispatch( setCurrentTest(testId) );
      }
      break;

    case types.SUBMIT_TEST:
      {
        const
        test = store.getState().test,
        testId = test.currentTestId,
        isAnswered = Boolean( getUnansweredQuestionsNumber( store.getState() ) === 0 ),
        isChecking = test.isChecking,
        isHaving = test.isHaving,
        isSubmitting = test.isSubmitting;
      
        if (isSubmitting) {
          dispatch( scoreTest() );
          // dispatch( finishTest( testId ) );
          break;
        }

        if (isHaving) {
          dispatch( finishTestFill() );
          break;
        }

        if (isChecking) {
          if ( !isAnswered ) {
            dispatch( finishTestCheck() );
            break;
          }
          // dispatch( sendTest() );
          dispatch( finishTest( testId ) );
          break;
        }
        
      }
      break;

    default:
      break;

  }

  return next(action);
}

export default testController;