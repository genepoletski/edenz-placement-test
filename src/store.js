import { createStore, applyMiddleware, compose } from 'redux';
import app from './reducers';
import currentPageNameUpdater from './middleware/currentPageNameUpdater';

let store;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    app,
    composeEnhancers(
      applyMiddleware(
        currentPageNameUpdater
      )
    )
  )
}
else {
  store = createStore(
    app
  )
}

export default store;