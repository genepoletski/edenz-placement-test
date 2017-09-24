import { createStore, applyMiddleware, compose } from 'redux';
import app from './reducers';
import constants from './constants';
import currentPageNameUpdater from './middleware/currentPageNameUpdater';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  pages: {
    currentPage: 'Login'
  },
  test: {
    currentTestId: '',
    isStarted: false,
    visibilityFilter: constants.QUESTIONS_SHOW_ALL
  },
  tests: {},
  user: {
    email: 'mail@example.com',
    name: 'user',
    isLogged: false
  }
}

let store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    app,
    initialState,
    composeEnhancers(
      applyMiddleware(
        currentPageNameUpdater,
        thunkMiddleware
      )
    )
  )
}
else {
  store = createStore(
    app,
    initialState
  )
}

export default store;