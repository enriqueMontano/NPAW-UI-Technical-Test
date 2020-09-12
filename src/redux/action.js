export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

const fetchUsersPending = () => {
  return {
    type: FETCH_USERS_PENDING,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

export const fetchUsers = () => async (dispatch) => {
  const users = await fetch(
    `https://api.github.com/search/users?q=enrique&per_page=20`
  )
    .then((res) => res.json())
    .catch((error) => dispatch(fetchUsersError(error)));

  dispatch(fetchUsersPending());
  dispatch(fetchUsersSuccess(users));
};
