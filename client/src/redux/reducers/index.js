import {
	combineReducers,
} from 'redux';

import authReducer from 'redux/reducers/auth';
import formReducer from 'redux/reducers/form';
import contactReducer from 'redux/reducers/contact';
import drawerReducer from 'redux/reducers/drawer';

export default () => {
	return combineReducers({
		auth: authReducer,
		form: formReducer,
		contact: contactReducer,
		drawer: drawerReducer,
	});
};
