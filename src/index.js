import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

let
  store = createStore(app),
  rootEl;

if ( !( rootEl = document.getElementById('root') ) ) {
  rootEl = document.createElement('div');
  rootEl.id = 'root';
  document.body.appendChild(rootEl);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl
    );
  });
}