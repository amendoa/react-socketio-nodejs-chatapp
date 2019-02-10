import {
	SET_CURRENT_CONVERSATION,
	GET_CONVERSATIONS,
	GET_CONVERSATIONS_RECEIVED
} from 'redux/constants/conversation';

const initialState = {
	isFetching: false,
	currentConversation: null,
	result: []
};

export default function conversationReducer (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_CONVERSATION:
			return Object.assign({}, state, {
				currentConversation: Object.assign({}, state.currentConversation, {
					...action.params
				})
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

		default:
			return state;
	}
}
