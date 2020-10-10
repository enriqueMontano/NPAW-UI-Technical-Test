import {
  API,
  FETCH_USERS,
  FETCH_USER_DETAILS,
  SET_USERS,
  SET_USER_DETAILS,
} from './types';

export function fetchUsers(inputValue) {
  return apiAction({
    url: `https://api.github.com/search/users?q=${inputValue}&per_page=20`,
    onSuccess: setUsers,
    onFailure: () => console.log('API rate limit exceeded'),
    label: FETCH_USERS,
    input: inputValue,
  });
}

export function fetchUserDetails(username) {
  return apiAction({
    url: `https://api.github.com/users/${username}`,
    onSuccess: setUserDetails,
    onFailure: () => console.log('API rate limit exceeded'),
    label: FETCH_USER_DETAILS,
  });
}

function setUsers(data) {
  return {
    type: SET_USERS,
    payload: data,
  };
}

function setUserDetails(data) {
  return {
    type: SET_USER_DETAILS,
    payload: data,
  };
}

function apiAction({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  input = '',
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      input,
    },
  };
}
