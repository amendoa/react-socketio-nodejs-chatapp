import React from 'react';
import {
	render
} from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import RoutesContainer from 'react-router/routes';
import configureStore from 'redux/store';
import history from 'react-router/history';
import 'styles/index.scss';
// import 'react-toastify/dist/ReactToastify.css';
import * as serviceWorker from 'serviceWorker';
// import 'react-app-polyfill/ie9';
// import 'core-js/es6/number';
// import 'core-js/modules/es7.promise.finally';

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={history}>
			<RoutesContainer />
		</Router>
	</Provider>,
	document.getElementById('app')
);

serviceWorker.unregister();
