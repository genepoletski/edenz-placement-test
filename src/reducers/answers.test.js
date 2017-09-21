import answers from './answers';
import types from '../actions/actionTypes';

describe('Reducers: answers', () => {

  let initialState;

  beforeAll(() => {
    initialState = {}
  });

  it('must not change state if action is unknown', () => {
    expect(
      answers(
        initialState,
        {
          type: 'unknown',
          payload: 'some payload'
        }
      )
    )
    .toBe(initialState)
  });

  it('must store answer properly', () => {
    expect(
      answers(
        {
          '1': 'a'
        },
        {
          type: types.SET_ANSWER,
          payload: {
            testId: '1',
            questionId: '2',
            answerId: 'b'
          }
        }
      )
    )
    .toEqual({
      '1': 'a',
      '2': 'b'
    })
  });

});