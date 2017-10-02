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

  it('FINISH_TEST_CHECK must set current test state properly', () => {
    expect(
      test(
        {
          currentTestId: '1',
          isChecking: true,
          isHaving: false,
          isSubmitting: false
        },
        {
          type: types.FINISH_TEST_CHECK
        }
      )
    )
    .toEqual({
      currentTestId: '1',
      isChecking: true,
      isHaving: false,
      isSubmitting: true
    });
  });

  it('FINISH_TEST_FILL must set current test state properly', () => {
    expect(
      test(
        {
          currentTestId: '1',
          isChecking: false,
          isHaving: true,
          isSubmitting: false
        },
        {
          type: types.FINISH_TEST_FILL
        }
      )
    )
    .toEqual({
      currentTestId: '1',
      isChecking: false,
      isHaving: true,
      isSubmitting: true
    });
  });

  it('DO_AFTER_RECEIVE must set current test state properly', () => {
    expect(
      test(
        initialState,
        {
          type: types.DO_AFTER_RECEIVE
        }
      )
    )
    .toEqual({
      currentTestId: '',
      isStarted: false,
      isHaving: true,
      visibilityFilter: 'QUESTIONS_SHOW_ALL'
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

  it('START_TEST_CHECK must set current state properly', () => {
    expect(
      test(
        {
          currentTestId: '',
          isHaving: true,
          isChecking: false
        },
        {
          type: types.START_TEST_CHECK
        }
      )
    )
    .toEqual({
      currentTestId: '',
      isChecking: true,
      isHaving: false,
      isSubmitting: false
    })
  });

});