import { put, takeLatest } from 'redux-saga/effects';
import queryString from 'querystring';
import * as authActions from 'actions/auth';
import * as formActions from 'actions/form';
import constants from 'modules/constants';
import { toast } from 'react-toastify';
import {
	serverErrorsToFrontFormat
} from 'modules/utils';

import {
	POST_SIGNUP,
	GET_VERIFY_NICKNAME
} from 'redux-constants/auth';

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

		// TODO SET TOKEN AND LOGIN
		if (!response.success && response.errors.length > 0) {
			// toast.error("TESTE");
			// TODO SET GLOBAL ERRORS;
		}

		yield put(formActions.setFormError(formName, {
			errors: serverErrorsToFrontFormat(response.errors)
		}));

		yield put(authActions.postSignUpReceived());
	} catch (e) {
		yield put(authActions.postSignUpReceived());
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
	}
}

const authSagas = [
	takeLatest(POST_SIGNUP, signUpPostFetch),
	takeLatest(GET_VERIFY_NICKNAME, verifyNicknameGetFetch)
];

export default authSagas;
