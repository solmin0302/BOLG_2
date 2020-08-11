import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as modules from './modules';

const reducers = combineReducers(modules);

const config = () => createStore(reducers, composeWithDevTools());

export default config;
