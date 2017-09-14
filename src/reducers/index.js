import { combineReducers } from 'redux';
import test from './test';
import tests from './tests';
import user from './user';

const app = combineReducers({
  test,
  tests,
  user
});

export default app;