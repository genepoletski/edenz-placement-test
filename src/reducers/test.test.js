import types from '../actions/actionTypes';
import test from './test';

describe('Reducers: test', () => {

  let initialState;
  
    beforeEach(() => {
      initialState = {
        currentTestId: '',
        isStarted: false,
        visibilityFilter: 'QUESTIONS_SHOW_ALL'
      }
    });

  it('must be a function', () => {
    expect(test).toBeInstanceOf(Function);
  });

  it('must not change state if action is unknown', () => {
    expect( 
      test(
        initialState,
        {
          type: 'unknown',
          payload: '1'
        }
      )
    )
    .toBe(initialState)
  });

  it('CHECK_TEST should enable student to check and change his answers', () => {
    expect(
      test({
        currentTestId: '1',
        isChecking: false,
        isFilling: true,
        isSubmitting: true
      },
      {
        type: types.CHECK_TEST
      }
    ))
    .toEqual({
      currentTestId: '1',
      isChecking: true,
      isFilling: false,
      isSubmitting: false
    })
  });

  it('FINISH_TEST must set current test state properly', () => {
    expect(
      test(
        {
          currentTestId: '1',
          currentTestPage: 5,
          isChecking: true,
          isHaving: false,
          isSubmitting: true
        },
        {
          type: types.FINISH_TEST,
          payload: '1'
        }
      )
    )
    .toEqual({
      currentTestId: '',
      currentTestPage: 1,
      isChecking: false,
      isHaving: false,
      isSubmitting: false
    });
  });

  it('FINISH_TEST_CHECK should end test checking phase', () => {
    expect(
      test(
        {
          currentTestId: '1',
          didCheck: false,
          isChecking: true,
        },
        {
          type: types.FINISH_TEST_CHECK
        }
      )
    )
    .toEqual({
      currentTestId: '1',
      didCheck: true,
      isChecking: false
    });
  });

  it('FINISH_TEST_FILL should end test filling phase', () => {
    expect(
      test(
        {
          currentTestId: '1',
          didFill: false,
          isFilling: true
        },
        {
          type: types.FINISH_TEST_FILL
        }
      )
    )
    .toEqual({
      currentTestId: '1',
      didFill: true,
      isFilling: false
    });
  });

  it('OFFER_CHECK_TEST should ask user to check test before submit', () => {
    expect(
      test({
        currentTestId: '1',
        isFilling: true,
        isChecking: false,
        isSubmitting: false
      },
      {
        type: types.OFFER_CHECK_TEST
      })
    )
    .toEqual({
      currentTestId: '1',
      isFilling: true,
      isChecking: false,
      isSubmitting: true
    });
  });

  it('SET_CURRENT_TEST must set current test id properly', () => {
    expect(
      test(
        initialState,
        {
          type: types.SET_CURRENT_TEST,
          payload: '1'
        })
    )
    .toEqual({
      currentTestId: '1',
      isStarted: false,
      visibilityFilter: 'QUESTIONS_SHOW_ALL'
    })
  });

  it('SET_TEST_PAGE should set pagination properly', () => {
    expect(
      test(
        {
          currentTestId: '1',
          currentTestPage: 1
        },
        {
          type: types.SET_TEST_PAGE,
          payload: 2
        }
      )
    ).toEqual({
      currentTestId: '1',
      currentTestPage: 2
    });
  });

  it('SET_VISIBILITY_FILTER must set question visibility filter properly', () => {
    expect(
      test(
        initialState,
        {
          type: types.SET_VISIBILITY_FILTER,
          payload: 'QUESTIONS_SHOW_UNANSWERED'
        }
      )
    )
    .toEqual({
      currentTestId: '',
      isStarted: false,
      visibilityFilter: 'QUESTIONS_SHOW_UNANSWERED'
    })
  });

  it('START_TEST_CHECK should start test check phase', () => {
    expect(
      test(
        {
          currentTestId: '1',
          isChecking: false
        },
        {
          type: types.START_TEST_CHECK
        }
      )
    )
    .toEqual({
      currentTestId: '1',
      isChecking: true
    })
  });

  it('START_TEST_FILL should start test filling phase', () => {
    expect(
      test(
        {
          currentTestId: '1',
          isFilling: false
        },
        {
          type: types.START_TEST_FILL
        }
      )
    )
    .toEqual({
      currentTestId: '1',
      isFilling: true
    });
  });

});