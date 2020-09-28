import { applyMiddleware } from 'redux';
import validator from './validator';
import api from './api';

export default applyMiddleware(validator, api);
