import {
  ADD_STUDENT,
  FETCH_TEST,
  SAVE_TEST,
  UPDATE_STUDENT
} from './actionTypes';

export const addStudent = payload => {
  return {
    type: ADD_STUDENT,
    payload
  }
}

export const updateStudent = payload => {
  return {
    type: UPDATE_STUDENT,
    payload
  }
}

export const fetchTest = id => {
  return {
    type: FETCH_TEST,
    payload: id
  }
}

export const saveTest = (id, data) => {
  return {
    type: SAVE_TEST,
    payload: data
  }
}