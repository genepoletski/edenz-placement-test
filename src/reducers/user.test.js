import user from './user';

import constants from '../constants';

import {
  addStudent,
  updateStudent
} from '../actions';

describe('Reducers: user', () => {
  let initialState;

  beforeAll(() => {
    initialState = {
      type: '',
      name: '',
      email: ''
    }
  });

  it('must be a function', () => {
    expect(user).toBeInstanceOf(Function);
  });

  it('must not change state if action is unknown', () => {
    expect( 
      user(
        initialState,
        {
          type: 'unknown',
          payload: {
            name: 'John Smith'
          }
        }
      )
    )
    .toBe(initialState)
  });

  it('must properly add new user info', () => {
    expect(
      user(
        initialState,
        addStudent({
          name: 'John Smith',
          email: 'johnsmith@mail.com'
        })
      )
    )
    .toEqual({
      type: constants.USER_TYPE_STUDENT,
      name: 'John Smith',
      email: 'johnsmith@mail.com'
    });
  });

  it('must properly update user details', () => {
    expect(
      user(
        {
          type: constants.USER_TYPE_STUDENT,
          name: 'John Smith',
          email: 'jonsmith@mail.com'
        },
        updateStudent({
          email: 'johnsmith@mail.com'
        })
      )
    )
    .toEqual({
      type: constants.USER_TYPE_STUDENT,
      name: 'John Smith',
      email: 'johnsmith@mail.com'
    });
  });

});