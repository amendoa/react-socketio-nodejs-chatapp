import React from 'react';
import {
	render
} from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import RoutesContainer from 'react-router/routes';
import configureStore, { history } from 'redux/store';
import 'styles/index.scss';
// import 'react-toastify/dist/ReactToastify.css';
import * as serviceWorker from 'serviceWorker';
// import 'react-app-polyfill/ie9';
// import 'core-js/es6/number';
// import 'core-js/modules/es7.promise.finally';

const store = configureStore();
// store.runSaga(rootSaga);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<RoutesContainer />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
);

serviceWorker.unregister();
