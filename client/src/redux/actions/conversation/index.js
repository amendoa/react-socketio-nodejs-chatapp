import {
	SET_CURRENT_CONVERSATION
} from 'redux/constants/conversation';

export function setCurrentConversation (params) {
	return {
		type: SET_CURRENT_CONVERSATION,
		params
	};
}
