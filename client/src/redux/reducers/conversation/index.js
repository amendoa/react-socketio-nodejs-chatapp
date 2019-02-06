import {
	SET_CURRENT_CONVERSATION
} from 'redux/constants/conversation';

const initialState = {
	currentConversation: null
};

export default function conversationReducer (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_CONVERSATION:
			return state;
		default:
			return state;
	}
}
