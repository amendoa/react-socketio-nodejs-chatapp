import {
	POST_ADD_CONTACT,
	POST_ADD_CONTACT_RECEIVED,
	RESET_ADD_CONTACT,
	GET_CONTACTS,
	GET_CONTACTS_RECEIVED,
	RESET_GET_CONTACTS,
	RESET_CONTACT,
	DELETE_CONTACT,
	DELETE_CONTACT_RECEIVED,
	REMOVE_CONTACT
} from 'redux/constants/contact';

const initialState = {
	addContact: {
		isFetching: false,
		errors: [],
		successMessages: []
	},
	getContacts: {
		isFetching: false,
		result: []
	},
	deleteContact: {
		isFetching: false,
		currentContactIdIsDeleting: null
	}
};

export default function contactReducer (state = initialState, action) {
	switch (action.type) {
		case GET_CONTACTS:
			return Object.assign({}, state, {
				getContacts: Object.assign({}, state.getContacts, {
					isFetching: true
				})
			});

		case GET_CONTACTS_RECEIVED:
			return Object.assign({}, state, {
				getContacts: Object.assign({}, state.getContacts, {
					isFetching: false,
					...action.params
				})
			});

		case RESET_GET_CONTACTS:
			return Object.assign({}, state, {
				getContacts: Object.assign({}, state.getContacts, {
					isFetching: false,
					result: []
				})
			});

		case POST_ADD_CONTACT:
			return Object.assign({}, state, {
				addContact: Object.assign({}, state.addContact, {
					isFetching: true
				})
			});

		case POST_ADD_CONTACT_RECEIVED:
			return Object.assign({}, state, {
				addContact: Object.assign({}, state.addContact, {
					isFetching: false,
					...action.params
				})
			});

		case DELETE_CONTACT:
			return Object.assign({}, state, {
				deleteContact: Object.assign({}, state.deleteContact, {
					isFetching: true,
					currentContactIdIsDeleting: action.params.contactId
				})
			});

		case DELETE_CONTACT_RECEIVED:
			return Object.assign({}, state, {
				deleteContact: Object.assign({}, state.deleteContact, {
					isFetching: false,
					currentContactIdIsDeleting: null
				})
			});

		case RESET_ADD_CONTACT:
			return Object.assign({}, state, {
				addContact: Object.assign({}, state.addContact, {
					isFetching: false,
					errors: [],
					successMessages: []
				})
			});

		case REMOVE_CONTACT:
			return Object.assign({}, state, {
				getContacts: Object.assign({}, state.getContacts, {
					result: state.getContacts.result.filter(item => item._id !== action.params.contactId)
				})
			});

		case RESET_CONTACT:
			return initialState;

		default:
			return state;
	}
}
