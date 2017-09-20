import { createStore, applyMiddleware, compose } from 'redux';
import app from './reducers';
import currentPageNameUpdater from './middleware/currentPageNameUpdater';
import thunk from 'redux-thunk';

const initialState = {
  pages: {
    currentPage: 'Login'
  },
  test: {
    currentTestId: '',
    isStarted: false
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
        thunk
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