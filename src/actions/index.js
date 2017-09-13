import {
  ADD_STUDENT,
  FETCH_TEST
} from './actionTypes';

export const addStudent = payload => {
  return {
    type: ADD_STUDENT,
    payload: {
      name: payload.name,
      email: payload.email,
      password: payload.password
    }
  }
}

export const fetchTest = payload => {
  return {
    type: FETCH_TEST,
    payload: {
      id: payload.id
    }
  }
}