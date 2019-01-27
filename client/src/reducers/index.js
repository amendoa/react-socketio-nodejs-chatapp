import {
	combineReducers,
} from 'redux';

import authReducer from 'reducers/auth';
import formReducer from 'reducers/form';

const rootReducer = combineReducers({
	auth: authReducer,
	form: formReducer
});

export default rootReducer;
