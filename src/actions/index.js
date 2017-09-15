import types from './actionTypes';

export const addStudent = payload => {
  return {
    type: types.ADD_STUDENT,
    payload
  }
}

export const setCurrentPage = pageName => {
  return {
    type: types.SET_CURRENT_PAGE,
    payload: pageName
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

export const fetchTest = id => {
  return {
    type: types.FETCH_TEST,
    payload: id
  }
}

export const saveTest = (id, data) => {
  return {
    type: types.SAVE_TEST,
    payload: data
  }
}