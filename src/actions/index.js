import 'whatwg-fetch';
import types from './actionTypes';

export const addStudent = payload => {
  return {
    type: types.ADD_STUDENT,
    payload
  }
}

export const fetchTest = id => {
  return dispatch => {
    dispatch( requestTest(id) );
    return fetch('/api/test/' + String(id))
      .then(
        response => response.json(),
        // TODO: Add error handling
        error => console.log('An error occured: ', error)
      )
      .then(
        json => dispatch(
          receiveTest({
            id,
            test: json,
          })
        )
      )
  }
}

export const receiveTest = data => {
  return {
    type: types.RECEIVE_TEST,
    payload: data
  }
}

export const requestTest = id => {
  return {
    type: types.REQUEST_TEST,
    payload: id
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

export const setCurrentPage = pageName => {
  return {
    type: types.SET_CURRENT_PAGE,
    payload: pageName
  }
}

export const setCurrentTest = testId => {
  return {
    type: types.SET_CURRENT_TEST,
    payload: testId
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    payload: filter
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