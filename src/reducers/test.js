import types from '../actions/actionTypes';

const test = (state = {}, action) => {
  switch( action.type ) {

    case types.CHECK_TEST:
      return Object.assign(
        {},
        state,
        {
          isChecking: true,
          isFilling: false,
          isSubmitting: false
        }
      );

    case types.FINISH_TEST:
      return Object.assign(
        {},
        state,
        {
          currentTestId: '',
          currentTestPage: 1,
          isChecking: false,
          isHaving: false,
          isSubmitting: false
        }
      );

    case types.FINISH_TEST_CHECK:
      return Object.assign(
        {},
        state,
        {
          didCheck: true,
          isChecking: false
        }
      );

    case types.FINISH_TEST_FILL:
      return Object.assign(
        {},
        state,
        {
          didFill: true,
          isFilling: false
        }
      );
    
    case types.OFFER_CHECK_TEST:
      return Object.assign(
        {},
        state,
        {
          isSubmitting: true
        }
      );
      
    case types.SET_CURRENT_TEST:
      return Object.assign(
        {},
        state,
        {
          currentTestId: action.payload
        }
      );

    case types.SET_TEST_PAGE:
      return Object.assign(
        {},
        state,
        {
          currentTestPage: action.payload
        }
      )

    case types.SET_VISIBILITY_FILTER:
      return Object.assign(
        {},
        state,
        {
          visibilityFilter: action.payload
        }
      );
    
    case types.START_TEST_CHECK:
      return Object.assign(
        {},
        state,
        {
          isChecking: true
        }
      );

    case types.START_TEST_FILL:
      return Object.assign(
        {},
        state,
        {
          isFilling: true
        }
      );

    default:
      return state;
  }
}

export default test;