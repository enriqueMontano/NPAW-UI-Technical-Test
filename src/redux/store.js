import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  pending: false,
  users: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING':
      return { ...state, pending: true };

    case 'FETCH_USERS_SUCCESS':
      return { ...state, pending: false, users: action.payload };

    case 'FETCH_USERS_ERROR':
      return { ...state, pending: false, error: action.error };

    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
