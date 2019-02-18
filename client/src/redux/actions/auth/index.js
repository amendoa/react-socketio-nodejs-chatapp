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

export function postSignIn (params) {
	return {
		type: POST_SIGNIN,
		params
	};
}

export function postSignInReceived (params) {
	return {
		type: POST_SIGNIN_RECEIVED,
		params
	};
}

export function resetSignIn () {
	return {
		type: RESET_SIGNIN
	};
}

export function postSignUp (params, formName) {
	return {
		type: POST_SIGNUP,
		params,
		formName
	};
}

export function postSignUpReceived (params) {
	return {
		type: POST_SIGNUP_RECEIVED,
		params
	};
}

export function getVerifyNickname (params) {
	return {
		type: GET_VERIFY_NICKNAME,
		params
	};
}

export function getVerifyNicknameReceived (params) {
	return {
		type: GET_VERIFY_NICKNAME_RECEIVED,
		params
	};
}

export function resetVerifyNickname () {
	return {
		type: RESET_VERIFY_NICKNAME
	};
}
