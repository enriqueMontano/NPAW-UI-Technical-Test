import { createStore } from 'redux';
import rootReducer from '../reducers';
import middleWare from '../middleware';

const store = createStore(rootReducer, middleWare);

export default store;
