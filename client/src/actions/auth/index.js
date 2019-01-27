import {
	POST_SIGNUP,
	POST_SIGNUP_RECEIVED,
	GET_VERIFY_NICKNAME,
	GET_VERIFY_NICKNAME_RECEIVED,
	RESET_VERIFY_NICKNAME
} from 'redux-constants/auth';

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
