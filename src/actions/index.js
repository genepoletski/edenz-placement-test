// import {
//   ADD_STUDENT,
//   FETCH_TEST,
//   SAVE_TEST,
//   SUBMIT_STUDENT,
//   UPDATE_STUDENT
// } from './actionTypes';
import types from './actionTypes';

export const addStudent = payload => {
  return {
    type: types.ADD_STUDENT,
    payload
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