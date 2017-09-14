import {
  ADD_STUDENT,
  FETCH_TEST,
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