import {
	SET_CURRENT_CONVERSATION,
	GET_CONVERSATIONS,
	GET_CONVERSATIONS_RECEIVED,
	SET_CURRENT_CONVERSATION_MESSAGES,
	ADD_MESSAGE_TO_CURRENT_CONVERSATION_MESSAGES,
	RESET_CONVERSATION,
	INCREMENT_CONVERSATION_UNREAD_MESSAGES,
	RESET_CONVERSATION_UNREAD_MESSAGES,
	DELETE_CONVERSATION_RECEIVED,
	DELETE_CONVERSATION
} from 'redux/constants/conversation';

import uuidv1 from 'uuid/v1';

const initialState = {
	isFetching: false,
	currentUserIdConversation: null,
	result: [],
	deleteConversation: {
		isFetching: false
	}
};

export default function conversationReducer (state = initialState, action) {
	const setNewConversationToResult = () => {
		return state.result.find(item => String(item.userId._id) === String(action.params.user._id))
			? state.result
			: state.result.concat([{
				userId: action.params.user,
				messages: [],
				unreadMessages: 0,
				_id: uuidv1()
			}]);
	};

	switch (action.type) {
		case SET_CURRENT_CONVERSATION:
			return Object.assign({}, state, {
				currentUserIdConversation: action.params.user._id,
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
						userId
					} = newItem;

					const {
						params
					} = action;

					if (String(userId._id) === String(params.userId)) {
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
						userId
					} = newItem;

					const {
						params
					} = action;

					const {
						message,
						user
					} = params;

					if (String(userId._id) === String(user._id)) {
						newItem.messages = newItem.messages.concat(message);
					}

					return newItem;
				})
			});

		case RESET_CONVERSATION:
			return initialState;

		case INCREMENT_CONVERSATION_UNREAD_MESSAGES:
			return Object.assign({}, state, {
				result: state.result.map((item) => {
					const newItem = item;
					const {
						user
					} = action.params;

					if (newItem.userId._id === user._id) {
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
						user
					} = action.params;

					if (newItem.userId._id === user._id) {
						newItem.unreadMessages = 0;
					}

					return newItem;
				})
			});

		case DELETE_CONVERSATION:
			return Object.assign({}, state, {
				deleteConversation: Object.assign({}, state.deleteConversation, {
					isFetching: true
				})
			});

		case DELETE_CONVERSATION_RECEIVED:
			console.log(action.params.conversationId);

			return Object.assign({}, state, {
				result: state.result.filter(item => item._id !== action.params.conversationId),
				deleteConversation: Object.assign({}, state.deleteConversation, {
					isFetching: false
				}),
				currentUserIdConversation: null
			});

			// return Object.assign({}, state, {
			// 	deleteConversation: Object.assign({}, state.deleteConversation, {
			// 		isFetching: false
			// 	})
			// });

		default:
			return state;
	}
}
