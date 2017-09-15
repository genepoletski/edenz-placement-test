import types from '../actions/actionTypes';
import { setCurrentPage } from '../actions';

const currentPageNameUpdater = store => next => action => {
  switch (action.type) {
    case types.SUBMIT_STUDENT:
      store.dispatch(setCurrentPage('Tests'));
      break;
    default:
  }
  return next(action);
}

export default currentPageNameUpdater;