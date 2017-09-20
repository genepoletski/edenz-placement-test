import types from './actionTypes';

import {
  fetchTest,
  receiveTest,
  requestTest,
  setCurrentTest
} from './index';

describe('Action Creators', () => {
  
  it('setCurrentTest() should create action properly', () => {
    expect(
      setCurrentTest('1')
    ).toEqual({
      type: types.SET_CURRENT_TEST,
      payload: '1'
    });
  });

  it.skip('fetchTest() should create action properly', () => {
    expect(
      fetchTest('1')
    ).toEqual({
      type: types.FETCH_TEST,
      payload: '1'
    });
  });

  it('receiveTest() should create action properly', () => { 
    const testData = {
      testId: '1',
      questions: {
        1: {
          'text': 'Question text',
          options: {
            1: {
              text: 'option1'
            },
            2: {
              text: 'option2'
            }
          }
        }
      }
    };

    expect(
      receiveTest(testData)
    )
    .toEqual({
      type: types.RECEIVE_TEST,
      payload: testData
    });  
  });

  it('requestTest() should create action properly', () => {
    expect(
      requestTest('1')
    )
    .toEqual({
      type: types.REQUEST_TEST,
      payload: '1'
    })
  });

});