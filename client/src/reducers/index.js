import {
	combineReducers,
} from 'redux';

import authReducer from 'reducers/auth';
import formReducer from 'reducers/form';
import { connectRouter } from 'connected-react-router';

export default (history) => {
	return combineReducers({
		auth: authReducer,
		form: formReducer,
		router: connectRouter(history)
	});
};
