import { put, takeLatest } from 'redux-saga/effects';
import queryString from 'querystring';
import * as authActions from 'actions/auth';
import * as formActions from 'actions/form';
import constants from 'modules/constants';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import {
	serverErrorsToFrontFormat,
	setToken
} from 'modules/utils';

import {
	POST_SIGNUP,
	POST_SIGNIN,
	GET_VERIFY_NICKNAME
} from 'redux-constants/auth';

function* signInPostFetch (props) {
	const {
		params
	} = props;

	const {
		body
	} = params;

	try {
		const response = yield fetch(`${constants.API.ROOT}${constants.API.ACTIONS.AUTH_SIGNIN}`, {
			method: constants.API.METHODS.POST,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: queryString.stringify(body)
		})
			.then(response => response.json());

		if (response.success && response.token) {
			setToken(response.token);
			yield put(push('/'));
		}

		yield put(authActions.postSignInReceived({
			errors: response.errors
		}));
	} catch (e) {
		yield put(authActions.postSignInReceived());
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

function* signUpPostFetch (props) {
	const {
		params,
		formName
	} = props;

	const {
		body
	} = params;

	try {
		const response = yield fetch(`${constants.API.ROOT}${constants.API.ACTIONS.AUTH_SIGNUP}`, {
			method: constants.API.METHODS.POST,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: queryString.stringify(body)
		})
			.then(response => response.json());

		if (response.success && response.token) {
			setToken(response.token);
			yield put(push('/'));
		}

		yield put(formActions.setFormError(formName, {
			errors: serverErrorsToFrontFormat(response.errors)
		}));

		yield put(authActions.postSignUpReceived());
	} catch (e) {
		yield put(authActions.postSignUpReceived());
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

function* verifyNicknameGetFetch (props) {
	const {
		params
	} = props;

	const {
		body,
		formName
	} = params;

	try {
		const response = yield fetch(`${constants.API.ROOT}${constants.API.ACTIONS.VERIFY_NICKNAME}?${queryString.stringify(body)}`, {
			method: constants.API.METHODS.GET,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
			.then(response => response.json());

		yield put(formActions.setFormError(formName, {
			errors: serverErrorsToFrontFormat(response.errors)
		}));

		yield put(authActions.getVerifyNicknameReceived({
			errors: response.errors
		}));
	} catch (e) {
		yield put(authActions.getVerifyNicknameReceived());
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

const authSagas = [
	takeLatest(POST_SIGNIN, signInPostFetch),
	takeLatest(POST_SIGNUP, signUpPostFetch),
	takeLatest(GET_VERIFY_NICKNAME, verifyNicknameGetFetch)
];

export default authSagas;
