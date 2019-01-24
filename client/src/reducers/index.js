import {
	combineReducers,
} from 'redux';

import authReducer from 'reducers/auth';

const rootReducer = combineReducers({
	authReducer
});

export default rootReducer;
