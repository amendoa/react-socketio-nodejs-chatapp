import {
	SET_CURRENT_CONVERSATION
} from 'redux/constants/conversation';

const initialState = {
	currentConversation: null
};

export default function conversationReducer (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_CONVERSATION:
			return Object.assign({}, state, {
				currentConversation: Object.assign({}, state.currentConversation, {
					...action.params
				})
			});

		default:
			return state;
	}
}
