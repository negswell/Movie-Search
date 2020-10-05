import { createStore } from 'redux';
import { tabReducer } from './tabs/tabReducer';

const store = createStore(tabReducer);

export default store;
