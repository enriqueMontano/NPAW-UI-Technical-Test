import {
  SET_USERS,
  SET_USER_DETAILS,
  API_START,
  API_END,
  FETCH_USERS,
  FETCH_USER_DETAILS,
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return { usersList: action.payload };
    case SET_USER_DETAILS:
      return { userDetails: action.payload };
    case API_START:
      if (
        action.payload === FETCH_USERS ||
        action.payload === FETCH_USER_DETAILS
      ) {
        return {
          ...state,
          payload: action.payload,
          isLoadingData: true,
        };
      }
      break;
    case API_END:
      if (
        action.payload === FETCH_USERS ||
        action.payload === FETCH_USER_DETAILS
      ) {
        return {
          ...state,
          isLoadingData: false,
        };
      }
      break;
    default:
      return state;
  }
}
