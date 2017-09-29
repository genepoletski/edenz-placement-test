import types from '../actions/actionTypes';

const testController = store => next => action => {
  
  switch (action.type) {
    default:
      break;
  }

  return next(action);
}

export default testController;