import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from 'redux/reducers';
import * as utils from 'modules/utils';
import rootSaga from 'redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
	sagaMiddleware
];

let composeEnhancer = compose;

if (utils.isDevelopmentEnv()) {
	/* eslint-disable-next-line */
	if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
		/* eslint-disable-next-line */
		composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	}
}

const store = createStore(
	createRootReducer(),
	{},
	composeEnhancer(
		applyMiddleware(...middlewares)
	)
);

sagaMiddleware.run(rootSaga);

export default store;
