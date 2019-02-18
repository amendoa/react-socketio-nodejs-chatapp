import {
	POST_ADD_CONTACT,
	POST_ADD_CONTACT_RECEIVED,
	RESET_ADD_CONTACT,
	GET_CONTACTS,
	GET_CONTACTS_RECEIVED,
	RESET_GET_CONTACTS,
	DELETE_CONTACT,
	DELETE_CONTACT_RECEIVED,
	REMOVE_CONTACT
} from 'redux/constants/contact';

export function resetGetContacts () {
	return {
		type: RESET_GET_CONTACTS
	};
}

export function getContacts () {
	return {
		type: GET_CONTACTS
	};
}

export function getContactsReceived (params) {
	return {
		type: GET_CONTACTS_RECEIVED,
		params
	};
}

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

export function deleteContact (params) {
	return {
		type: DELETE_CONTACT,
		params
	};
}

export function deleteContactReceived () {
	return {
		type: DELETE_CONTACT_RECEIVED
	};
}

export function removeContact (params) {
	return {
		type: REMOVE_CONTACT,
		params
	};
}
