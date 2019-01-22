import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import * as utils from 'utils';

function configureStore (initialState) {
	const middlewares = [thunkMiddleware];
	const loggerMiddleware = createLogger();

	if (utils.isDevelopmentEnv()) {
		middlewares.push(loggerMiddleware);
	}

	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			...middlewares
		)
	);

	return store;
}

export default configureStore;
