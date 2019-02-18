import {
	SET_CURRENT_CONVERSATION,
	GET_CONVERSATIONS,
	GET_CONVERSATIONS_RECEIVED,
	SET_CURRENT_CONVERSATION_MESSAGES,
	ADD_MESSAGE_TO_CURRENT_CONVERSATION_MESSAGES,
	INCREMENT_CONVERSATION_UNREAD_MESSAGES,
	RESET_CONVERSATION_UNREAD_MESSAGES,
	DELETE_CONVERSATION_RECEIVED,
	DELETE_CONVERSATION,
	REMOVE_CONVERSATION,
	REMOVE_MESSAGE_FROM_CONVERSATION
} from 'redux/constants/conversation';

import {
	RESET
} from 'redux/constants/main';

const initialState = {
	isFetching: false,
	currentPartnerIdConversation: null,
	result: [],
	deleteConversation: {
		isFetching: false,
		currentPartnerIdIsDeleting: null
	}
};

export default function conversationReducer (state = initialState, action) {
	const setNewConversationToResult = () => {
		return state.result.find(item => String(item.partnerId._id) === String(action.params.partner._id))
			? state.result
			: state.result.concat([{
				partnerId: action.params.partner,
				messages: [],
				unreadMessages: 0
			}]);
	};

	switch (action.type) {
		case SET_CURRENT_CONVERSATION:
			return Object.assign({}, state, {
				currentPartnerIdConversation: action.params.partner._id,
				result: setNewConversationToResult()
			});

		case GET_CONVERSATIONS:
			return Object.assign({}, state, {
				isFetching: true
			});

		case GET_CONVERSATIONS_RECEIVED:
			return Object.assign({}, state, {
				isFetching: false,
				result: action.params.result
			});

		case SET_CURRENT_CONVERSATION_MESSAGES:
			return Object.assign({}, state, {
				result: state.result.map((item) => {
					const newItem = item;

					const {
						partnerId
					} = newItem;

					const {
						params
					} = action;

					if (String(partnerId._id) === String(params.partnerId)) {
						newItem.messages = params.result;
					}

					return newItem;
				})
			});

		case ADD_MESSAGE_TO_CURRENT_CONVERSATION_MESSAGES:
			return Object.assign({}, state, {
				result: setNewConversationToResult().map((item) => {
					const newItem = item;

					const {
						partnerId
					} = newItem;

					const {
						params
					} = action;

					const {
						message,
						partner
					} = params;

					if (String(partnerId._id) === String(partner._id)) {
						newItem.messages = newItem.messages.concat(message);
					}

					return newItem;
				})
			});

		case INCREMENT_CONVERSATION_UNREAD_MESSAGES:
			return Object.assign({}, state, {
				result: state.result.map((item) => {
					const newItem = item;
					const {
						partner
					} = action.params;

					if (newItem.partnerId._id === partner._id) {
						newItem.unreadMessages += 1;
					}

					return newItem;
				})
			});

		case RESET_CONVERSATION_UNREAD_MESSAGES:
			return Object.assign({}, state, {
				result: state.result.map((item) => {
					const newItem = item;
					const {
						partner
					} = action.params;

					if (newItem.partnerId._id === partner._id) {
						newItem.unreadMessages = 0;
					}

					return newItem;
				})
			});

		case DELETE_CONVERSATION:
			return Object.assign({}, state, {
				deleteConversation: Object.assign({}, state.deleteConversation, {
					isFetching: true,
					currentPartnerIdIsDeleting: action.params.partnerId
				})
			});

		case DELETE_CONVERSATION_RECEIVED:
			return Object.assign({}, state, {
				deleteConversation: Object.assign({}, state.deleteConversation, {
					isFetching: false,
					currentPartnerIdIsDeleting: null
				})
			});

		case REMOVE_CONVERSATION:
			return Object.assign({}, state, {
				result: state.result.filter(item => String(item.partnerId._id) !== String(action.params.partnerId)),
				currentPartnerIdConversation: (
					String(state.currentPartnerIdConversation) === String(action.params.partnerId)
						? null
						: state.currentPartnerIdConversation
				)
			});

		case REMOVE_MESSAGE_FROM_CONVERSATION:
			return Object.assign({}, state, {
				result: state.result.map(item => {
					const newItem = item;
					if (String(item.partnerId._id) === String(action.params.partnerId)) {
						newItem.messages = item.messages.filter(message => message._id !== action.params.messageId);
					}

					return item;
				})
			});

		case RESET:
			return initialState;

		default:
			return state;
	}
}
