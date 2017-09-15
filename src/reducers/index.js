import { combineReducers } from 'redux';
import pages from './pages';
import test from './test';
import tests from './tests';
import user from './user';

const app = combineReducers({
  pages,
  test,
  tests,
  user
});

export default app;