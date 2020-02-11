import {createStore,applyMiddleware} from 'redux';
import rootProvider from '../providers/index.js';
import thunk from 'redux-thunk';

const store = createStore(rootProvider,applyMiddleware(thunk));

export default store;