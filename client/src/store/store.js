


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const configureStore = (preloadedState = {}) =>(
	createStore(rootReducer,
		preloadedState,
		composeEnhancers(applyMiddleware(thunk, logger)))
	);

