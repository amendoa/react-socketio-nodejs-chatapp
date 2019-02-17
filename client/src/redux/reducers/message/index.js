import {
	POST_MESSAGE,
	POST_MESSAGE_RECEIVED,
	GET_MESSAGES,
	GET_MESSAGES_RECEIVED,
	RESET_MESSAGE,
	DELETE_MESSAGE,
	DELETE_MESSAGE_RECEIVED
} from 'redux/constants/message';

const initialState = {
	postMessage: {
		isFetching: false
	},
	deleteMessage: {
		isFetching: false,
		currentMessageIdIsDeleting: null
	},
	getMessages: {
		isFetching: false
	}
};

export default function messageReducer (state = initialState, action) {
	switch (action.type) {
		case POST_MESSAGE:
			return Object.assign({}, state, {
				postMessage: Object.assign({}, state.postMessage, {
					isFetching: true
				})
			});

		case POST_MESSAGE_RECEIVED:
			return Object.assign({}, state, {
				postMessage: Object.assign({}, state.postMessage, {
					isFetching: false
				})
			});

		case GET_MESSAGES:
			return Object.assign({}, state, {
				getMessages: Object.assign({}, state.getMessages, {
					isFetching: true
				})
			});

		case GET_MESSAGES_RECEIVED:
			return Object.assign({}, state, {
				getMessages: Object.assign({}, state.getMessages, {
					isFetching: false
				})
			});

		case DELETE_MESSAGE:
			return Object.assign({}, state, {
				deleteMessage: Object.assign({}, state.deleteMessage, {
					isFetching: true,
					currentMessageIdIsDeleting: action.params.messageId
				})
			});

		case DELETE_MESSAGE_RECEIVED:
			return Object.assign({}, state, {
				deleteMessage: Object.assign({}, state.deleteMessage, {
					isFetching: false,
					currentMessageIdIsDeleting: null
				})
			});

		case RESET_MESSAGE:
			return initialState;

		default:
			return state;
	}
}
