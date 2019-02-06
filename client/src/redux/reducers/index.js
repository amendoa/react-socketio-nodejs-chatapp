import {
	combineReducers,
} from 'redux';

import authReducer from 'redux/reducers/auth';
import formReducer from 'redux/reducers/form';
import contactReducer from 'redux/reducers/contact';
import { connectRouter } from 'connected-react-router';

export default (history) => {
	return combineReducers({
		auth: authReducer,
		form: formReducer,
		contact: contactReducer,
		router: connectRouter(history)
	});
};
