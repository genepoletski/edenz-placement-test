import types from '../actions/actionTypes';
import test from './test';

describe('Reducers: test', () => {

  let initialState;
  
    beforeAll(() => {
      initialState = {
        currentTestId: '',
        isStarted: false
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

  it('must set current test id properly', () => {
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
      isStarted: false
    })
  })
});