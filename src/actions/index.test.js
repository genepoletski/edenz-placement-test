import types from './actionTypes';

import {
  checkTest,
  doBeforeSubmit,
  fetchTest,
  finishTest,
  finishTestCheck,
  finishTestFill,
  offerCheckTest,
  receiveTest,
  receiveTestScore,
  requestTest,
  saveTest,
  saveTestScore,
  scoreTest,
  sendTestAnswers,
  setAnswer,
  setCurrentTest,
  setTest,
  setTestPage,
  setVisibilityFilter,
  startTest,
  startTestCheck,
  startTestFill,
  submitTest
} from './index';

describe('Action Creators:', () => {

  it('checkTest() should create action properly', () => {
    expect(
      checkTest()
    )
    .toEqual({
      type: types.CHECK_TEST
    });
  });

  it('doDeforeSubmit() should create action for showing warning if needed', () => {
    expect(
      doBeforeSubmit()
    )
    .toEqual({
      type: types.DO_BEFORE_SUBMIT
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

  it('finishTest() should create action properly', () => {
    expect(
      finishTest('1')
    )
    .toEqual({
      type: types.FINISH_TEST,
      payload: '1'
    });
  });

  it('finishTestCheck() should create action properly', () => {
    expect(
      finishTestCheck()
    )
    .toEqual({
      type: types.FINISH_TEST_CHECK
    })
  });

  it('finishTestFill() should create action properly', () => {
    expect(
      finishTestFill()
    )
    .toEqual({
      type: types.FINISH_TEST_FILL
    });
  });

  it('offerCheckTest() should create action for asking user to check test', () => {
    expect(
      offerCheckTest()
    )
    .toEqual({
      type: types.OFFER_CHECK_TEST
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

  it('receiveTestScore() create action properly', () => {
    expect(
      receiveTestScore('1')
    )
    .toEqual({
      type: types.RECEIVE_TEST_SCORE,
      payload: '1'
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

  it('saveTestScore() should create action properly', () => {
    expect(
      saveTestScore('1', 'A++', 45)
    )
    .toEqual({
      type: types.SAVE_TEST_SCORE,
      payload: {
        testId: '1',
        grade: 'A++',
        correctAnswers: 45
      }
    });
  });

  it('scoreTest() should create action properly', () => {
    expect(
      scoreTest('1')
    )
    .toEqual({
      type: types.SCORE_TEST,
      payload: '1'
    });
  });

  it('sendTestAnswers() should create action properly', () => {
    expect(
      sendTestAnswers('1')
    )
    .toEqual({
      type: types.SEND_TEST_ANSWERS,
      payload: '1'
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

  it('startTest() should create action for initalizing test', () => {
    expect(
      startTest('1')
    )
    .toEqual({
      type: types.START_TEST,
      payload: '1'
    })
  });

  it('startTestCheck() should create action for starting test check', () => {
    expect(
      startTestCheck()
    )
    .toEqual({
      type: types.START_TEST_CHECK
    })
  });

  it('startTestFill() should create action for starting test filling', () => {
    expect(
      startTestFill()
    )
    .toEqual({
      type: types.START_TEST_FILL
    });
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