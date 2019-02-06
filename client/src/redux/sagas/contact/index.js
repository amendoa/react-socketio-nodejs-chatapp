import { put, takeLatest } from 'redux-saga/effects';
import * as contactActions from 'redux/actions/contact';
import constants from 'modules/constants';
import { toast } from 'react-toastify';
import {
	sendRequest
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

	const successMessages = {};

	try {
		const response = yield sendRequest({
			url: `${constants.API.ROOT}${constants.API.ACTIONS.CONTACT}`,
			method: constants.API.METHODS.POST,
			body
		});

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
	try {
		const response = yield sendRequest({
			url: `${constants.API.ROOT}${constants.API.ACTIONS.CONTACT}`,
			method: constants.API.METHODS.GET
		});

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
