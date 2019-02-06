import {
	POST_ADD_CONTACT,
	POST_ADD_CONTACT_RECEIVED,
	RESET_ADD_CONTACT
} from 'redux/constants/contact';

const initialState = {
	addContact: {
		isFetching: false,
		errors: [],
		successMessages: []
	}
};

export default function contactReducer (state = initialState, action) {
	switch (action.type) {
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

		case RESET_ADD_CONTACT:
			return Object.assign({}, state, {
				addContact: Object.assign({}, state.addContact, {
					isFetching: false,
					errors: [],
					successMessages: []
				})
			});

		default:
			return state;
	}
}
