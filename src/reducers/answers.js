import types from '../actions/actionTypes';

const answers = (state = {}, action) => {
  switch (action.type) {
    case types.SET_ANSWER:
      return Object.assign({}, state,
        {
          [action.payload.questionId]: action.payload.answerId
        }
      );
    default:
      return state;
  }
}

export default answers;