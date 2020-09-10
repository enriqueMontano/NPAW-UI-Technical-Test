export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const fetchUsersPending = () => {
  return {
    type: FETCH_USERS_PENDING,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

export const fetchUsers = () => async (dispatch) => {
  const users = await fetch('https://api.github.com/search/users?q=enriqueMontano')
    .then((res) => res.json())
    .catch((error) => dispatch(fetchUsersError(error)));

  dispatch(fetchUsersPending());
  dispatch(fetchUsersSuccess(users));
};
