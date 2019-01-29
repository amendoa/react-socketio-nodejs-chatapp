import {
	combineReducers,
} from 'redux';

import authReducer from 'redux/reducers/auth';
import formReducer from 'redux/reducers/form';
import { connectRouter } from 'connected-react-router';

export default (history) => {
	return combineReducers({
		auth: authReducer,
		form: formReducer,
		router: connectRouter(history)
	});
};
