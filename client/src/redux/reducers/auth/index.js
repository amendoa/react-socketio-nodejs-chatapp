import {
	POST_SIGNUP,
	POST_SIGNUP_RECEIVED,
	POST_SIGNIN,
	POST_SIGNIN_RECEIVED,
	GET_VERIFY_NICKNAME,
	GET_VERIFY_NICKNAME_RECEIVED,
	RESET_VERIFY_NICKNAME,
	RESET_SIGNIN
} from 'redux/constants/auth';

const initialState = {
	signIn: {
		isFetching: false,
		errors: []
	},
	signUp: {
		isFetching: false,
		errors: []
	},
	verifyNickname: {
		isFetching: false,
		errors: []
	}
};

function authReducer (state = initialState, action) {
	switch (action.type) {
		case POST_SIGNIN:
			return Object.assign({}, state, {
				signIn: Object.assign({}, state.signIn, {
					isFetching: true
				})
			});

		case POST_SIGNIN_RECEIVED:
			return Object.assign({}, state, {
				signIn: Object.assign({}, state.signIn, {
					isFetching: false,
					...action.params
				})
			});

		case RESET_SIGNIN:
			return Object.assign({}, state, {
				signIn: Object.assign({}, state.signIn, {
					isFetching: false,
					errors: []
				})
			});

		case POST_SIGNUP:
			return Object.assign({}, state, {
				signUp: Object.assign({}, state.signUp, {
					isFetching: true
				})
			});

		case POST_SIGNUP_RECEIVED:
			return Object.assign({}, state, {
				signUp: Object.assign({}, state.signUp, {
					isFetching: false
				})
			});

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
