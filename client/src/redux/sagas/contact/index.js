import { put, takeLatest } from 'redux-saga/effects';
import queryString from 'querystring';
import * as contactActions from 'redux/actions/contact';
import constants from 'modules/constants';
import { toast } from 'react-toastify';
import {
	getToken
} from 'modules/utils';

import {
	POST_ADD_CONTACT,
	GET_CONTACTS
} from 'redux/constants/contact';

function* addContactPostFetch (props) {
	const {
		params
	} = props;

	const {
		body
	} = params;

	const token = getToken();
	const successMessages = {};

	try {
		const response = yield fetch(`${constants.API.ROOT}${constants.API.ACTIONS.CONTACT}`, {
			method: constants.API.METHODS.POST,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'x-access-token': token
			},
			body: queryString.stringify(body)
		})
			.then(response => response.json());

		if (response.success) {
			successMessages.nickname = constants.LABELS.CONTACT.CONTACT_SUCCESSFULLY_ADDED;
		}

		yield put(contactActions.postAddContactReceived({
			errors: response.errors,
			successMessages
		}));
	} catch (e) {
		yield put(contactActions.postAddContactReceived());
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

function* getContactsGetFetch () {
	const token = getToken();

	try {
		const response = yield fetch(`${constants.API.ROOT}${constants.API.ACTIONS.CONTACT}`, {
			method: constants.API.METHODS.GET,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'x-access-token': token
			}
		})
			.then(response => response.json());


		yield put(contactActions.getContactsReceived({
			result: response.result
		}));
	} catch (e) {
		yield put(contactActions.getContactsReceived());
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

const authSagas = [
	takeLatest(POST_ADD_CONTACT, addContactPostFetch),
	takeLatest(GET_CONTACTS, getContactsGetFetch)
];

export default authSagas;
