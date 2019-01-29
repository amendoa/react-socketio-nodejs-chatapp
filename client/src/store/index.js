import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from 'reducers';
import * as utils from 'modules/utils';
import rootSaga from 'sagas';

export const history = createBrowserHistory();

export default function configureStore (initialState) {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [
		sagaMiddleware,
		routerMiddleware(history)
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
		createRootReducer(history),
		initialState,
		composeEnhancer(
			applyMiddleware(...middlewares)
		)
	);

	sagaMiddleware.run(rootSaga);

	return store;
}
