import { FETCH_USERS } from '../actions/types';

const validator = (store) => (next) => (action) => {
  if (
    action.payload.label === FETCH_USERS &&
    action.payload.input.toLowerCase().indexOf('gcpglobal') !== -1
  ) {
    return alert('NOPE gcpglobal');
  }

  if (action.payload.label === FETCH_USERS && action.payload.input.length < 4) {
    return alert('NOPE menos de 4');
  }
  return next(action);
};

export default validator;
