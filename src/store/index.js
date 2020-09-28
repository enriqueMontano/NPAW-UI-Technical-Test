import { createStore } from 'redux';
import rootReducer from '../reducers';
import middleWare from '../middleware';

const store = createStore(rootReducer, middleWare);
window.store = store;
export default store;
