import {
	SIGNIN_POST_FETCH,
	SIGNIN_POST_FETCH_STOP
} from 'redux-constants/auth';

const initialState = {
	result: [],
	isFetching: false
};

function authReducer (state = initialState, action) {
	switch (action.type) {
		case SIGNIN_POST_FETCH:
			return Object.assign({}, state, {
				isFetching: true
			});

		case SIGNIN_POST_FETCH_STOP:
			return Object.assign({}, state, {
				isFetching: false
			});
		default:
			return state;
	}
}

export default authReducer;
