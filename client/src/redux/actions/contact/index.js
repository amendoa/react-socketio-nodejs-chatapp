import {
	POST_ADD_CONTACT,
	POST_ADD_CONTACT_RECEIVED,
	RESET_ADD_CONTACT
} from 'redux/constants/contact';

export function postAddContact (params) {
	return {
		type: POST_ADD_CONTACT,
		params
	};
}

export function postAddContactReceived (params) {
	return {
		type: POST_ADD_CONTACT_RECEIVED,
		params
	};
}

export function resetAddContact () {
	return {
		type: RESET_ADD_CONTACT
	};
}
