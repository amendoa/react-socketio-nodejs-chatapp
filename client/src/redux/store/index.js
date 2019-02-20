import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
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
	if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
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
