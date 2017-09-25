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


});