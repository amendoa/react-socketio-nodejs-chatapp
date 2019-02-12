import {
	SET_CURRENT_CONVERSATION,
	GET_CONVERSATIONS,
	GET_CONVERSATIONS_RECEIVED,
	SET_CURRENT_CONVERSATION_MESSAGES,
	ADD_MESSAGE_TO_CURRENT_CONVERSATION_MESSAGES,
	RESET_CONVERSATION
} from 'redux/constants/conversation';

const initialState = {
	isFetching: false,
	currentUserIdConversation: null,
	result: []
};

export default function conversationReducer (state = initialState, action) {
	const setNewConversationToResult = () => {
		return state.result.find(item => String(item.userId._id) === String(action.params.user._id))
			? state.result
			: [
				{
					userId: action.params.user,
					messages: []
				}
			];
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

		default:
			return state;
	}
}
