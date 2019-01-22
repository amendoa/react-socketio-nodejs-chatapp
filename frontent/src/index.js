import React from 'react';
import {
	render
} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getRoutes } from 'routes';
import configureStore from 'store';
import 'styles/index.scss';
// import 'react-toastify/dist/ReactToastify.css';
import * as serviceWorker from 'serviceWorker';
// import 'react-app-polyfill/ie9';
// import 'core-js/es6/number';
// import 'core-js/modules/es7.promise.finally';

const store = configureStore();

render(
	<Provider store={store}>
		<BrowserRouter>
			{
				getRoutes(store)
			}
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);

serviceWorker.unregister();
