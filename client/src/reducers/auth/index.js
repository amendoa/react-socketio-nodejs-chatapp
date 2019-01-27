import {
	POST_SIGNUP,
	POST_SIGNUP_RECEIVED,
	GET_VERIFY_NICKNAME,
	GET_VERIFY_NICKNAME_RECEIVED,
	RESET_VERIFY_NICKNAME
} from 'redux-constants/auth';

const initialState = {
	signIn: {
		isFetching: false
	},
	signUp: {
		isFetching: false
	},
	verifyNickname: {
		isFetching: false,
		errors: []
	}
};

function authReducer (state = initialState, action) {
	switch (action.type) {
		case POST_SIGNUP:
			// return Object.assign({}, state, {
			// 	isFetching: true
			// });
			return state;

		case POST_SIGNUP_RECEIVED:
			// return Object.assign({}, state, {
			// 	isFetching: false
			// });
			return state;

		case GET_VERIFY_NICKNAME:
			return Object.assign({}, state, {
				verifyNickname: {
					...state.verifyNickname,
					isFetching: true
				}
			});

		case GET_VERIFY_NICKNAME_RECEIVED:
			return Object.assign({}, state, {
				verifyNickname: {
					...state.verifyNickname,
					isFetching: false,
					...action.params
				}
			});

		case RESET_VERIFY_NICKNAME:
			return Object.assign({}, state, {
				verifyNickname: {
					isFetching: false,
					errors: []
				}
			});

		default:
			return state;
	}
}

export default authReducer;
