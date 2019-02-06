import {
	SET_CURRENT_CONVERSATION
} from 'redux/constants/conversation';

export function setCurrentConversation (user) {
	return {
		type: SET_CURRENT_CONVERSATION,
		user
	};
}
