import 'whatwg-fetch';
import types from './actionTypes';

export const addStudent = payload => {
  return {
    type: types.ADD_STUDENT,
    payload
  }
}

export const fetchTest = testId => {
  return dispatch => {
    dispatch( requestTest(testId) );
    return fetch('/api/test/' + String(testId))
      .then(
        response => response.json(),
        // TODO: Add error handling
        error => console.log('An error occured: ', error)
      )
      .then(
        json => dispatch(
          saveTest({
            id: testId,
            test: json,
          })
        )
      )
      .then(() => dispatch( receiveTest(testId))
    )
  }
}

export const finishTest = testId => {
  return {
    type: types.FINISH_TEST,
    payload: testId
  }
}

export const receiveTest = data => {
  return {
    type: types.RECEIVE_TEST,
    payload: data
  }
}

export const requestTest = testId => {
  return {
    type: types.REQUEST_TEST,
    payload: testId
  }
}

export const saveTest = test => {
  return {
    type: types.SAVE_TEST,
    payload: test
  }
}

export const setAnswer = (testId, questionId, answerId) => {
  return {
    type: types.SET_ANSWER,
    payload: {
      testId,
      questionId,
      answerId
    }
  }
}

// Set global navigation
export const setCurrentPage = pageName => {
  return {
    type: types.SET_CURRENT_PAGE,
    payload: pageName
  }
}

// Set current test
export const setCurrentTest = testId => {
  return {
    type: types.SET_CURRENT_TEST,
    payload: testId
  }
}

// Create new test
export const setTest = (testId, test) => {
  return {
    type: types.SET_TEST,
    payload: {
      testId,
      test
    }
  }
}


// Required for pagination
export const setTestPage = pageNum => {
  return {
    type: types.SET_TEST_PAGE,
    payload: pageNum
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    payload: filter
  }
}

export const startTest = (testId, test) => {
  return {
    type: types.START_TEST,
    payload: testId
  }
}

export const submitStudent = () => {
  return {
    type: types.SUBMIT_STUDENT
  }
}

export const updateStudent = payload => {
  return {
    type: types.UPDATE_STUDENT,
    payload
  }
}

// export const saveTest = (id, data) => {
//   return {
//     type: types.SAVE_TEST,
//     payload: data
//   }
// }