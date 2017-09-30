import types from './actionTypes';

import {
  doAfterFill,
  doAfterReceive,
  fetchTest,
  finishTest,
  receiveTest,
  requestTest,
  saveTest,
  setAnswer,
  setCurrentTest,
  setTest,
  setTestPage,
  setVisibilityFilter,
  startTest,
  submitTest
} from './index';

describe('Action Creators:', () => {

  it('doAfterFill() should create action properly', () => {
    expect(
      doAfterFill()
    )
    .toEqual({
      type: types.DO_AFTER_FILL
    })
  });

  it('doAfterReceive() should create action properly', () => {
    expect(
      doAfterReceive()
    )
    .toEqual({
      type: types.DO_AFTER_RECEIVE
    });
  });

  it('setAnswer() should create action properly', () => {
    expect(
      setAnswer('1', '1', 'a')
    )
    .toEqual({
      type: types.SET_ANSWER,
      payload: {
        testId: '1',
        questionId: '1',
        answerId: 'a'
      }
    })
  });

  it.skip('fetchTest() should create action properly', () => {
    expect(
      fetchTest('1')
    ).toEqual({
      type: types.FETCH_TEST,
      payload: '1'
    });
  });

  it('finishTest() should create action properly', () => {
    expect(
      finishTest('1')
    )
    .toEqual({
      type: types.FINISH_TEST,
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

  it('saveTest() should create action properly', () => {
    expect(
      saveTest({
        '1': {},
        '2': {}
      })
    )
    .toEqual({
      type: types.SAVE_TEST,
      payload: {
        '1': {},
        '2': {}
      }
    })
  });

  it('setCurrentTest() should create action properly', () => {
    expect(
      setCurrentTest('1')
    ).toEqual({
      type: types.SET_CURRENT_TEST,
      payload: '1'
    });
  });

  it('setTestPage() should set pagination properly', () => {
    expect(
      setTestPage(1)
    ).toEqual({
      type: types.SET_TEST_PAGE,
      payload: 1
    })
  });

  it('setVisibilityFilter() should create action properly', () => {
    expect(
      setVisibilityFilter('QUESTIONS_SHOW_ALL')
    ).toEqual({
      type: types.SET_VISIBILITY_FILTER,
      payload: 'QUESTIONS_SHOW_ALL'
    });
  });

  it('setTest() should create action properly', () => {
    expect(
      setTest('1', {
        isFetching: false,
        test: {},
        answers: {}
      })
    )
    .toEqual({
      type: types.SET_TEST,
      payload: {
        testId: '1',
        test: {
          isFetching: false,
          test: {},
          answers: {}
        }
      }
    });
  });

  it('startTest() should create action properly', () => {
    expect(
      startTest('1')
    )
    .toEqual({
      type: types.START_TEST,
      payload: '1'
    })
  });

  it('submitTest() should create action properly', () => {
    expect(
      submitTest()
    )
    .toEqual({
      type: types.SUBMIT_TEST
    })
  });

});