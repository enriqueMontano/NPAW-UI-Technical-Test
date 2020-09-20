import axios from 'axios';
import { API } from '../actions/types';
import { accessDenied, apiError, apiStart, apiEnd } from '../actions/api';

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type !== API) return;

  const { url, method, data, onSuccess, onFailure, label } = action.payload;
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || '';

  if (label) {
    dispatch(apiStart(label));
  }
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
      dispatch(onFailure(error));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
