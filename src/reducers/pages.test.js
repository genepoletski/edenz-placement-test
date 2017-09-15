import pages from './pages';
import types from '../actions/actionTypes';

describe('Reducers: pages', () => {
  
  let initialState;
  
  beforeAll(() => {
    initialState = {
      currentPage: '',
      pagesByNames: {
        Login: {
          locked: false
        }
      }
    }
  });
  
  it('must be a function', () => {
    expect(pages).toBeInstanceOf(Function);
  });

  it('must not change state if action is unknown', () => {
    expect( 
      pages(
        initialState,
        {
          type: 'unknown',
          payload: 'Home'
        }
      )
    )
    .toBe(initialState)
  });

  it('should update current page name', () => {
    expect(
      pages(
        initialState,
        {
          type: types.SET_CURRENT_PAGE,
          payload: 'Tests'
        }
      )
    )
    .toEqual({
      currentPage: 'Tests',
      pagesByNames: {
        Login: {
          locked: false
        }
      }
    })
  });

});