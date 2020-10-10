import axios from 'axios';
import { API, FETCH_USERS } from '../actions/types';
import { accessDenied, apiError, apiStart, apiEnd } from '../actions/api';
import { setErrorInput } from '../actions/validator';

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    input,
  } = action.payload;

  const dataOrParams = ['GET'].includes(method) ? 'params' : 'data';

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';

  if (label) {
    dispatch(apiStart(label));
  }

  if (
    (label === FETCH_USERS &&
      input.toLowerCase().indexOf('gcpglobal') !== -1) ||
    (label === FETCH_USERS && input.length < 4)
  ) {
    dispatch(setErrorInput());
  } else {
    axios
      .request({
        url,
        method,
        [dataOrParams]: data,
      })
      .then(({ data }) => {
        dispatch(onSuccess(data));
      })
      .catch((error) => {
        dispatch(apiError(error));
        onFailure(error);

        if (error.response && error.response.status === 403) {
          dispatch(accessDenied(window.location.pathname));
        }
      })
      .finally(() => {
        if (label) {
          dispatch(apiEnd(label));
        }
      });
  }
};

export default apiMiddleware;
