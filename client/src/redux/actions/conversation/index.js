import {
	SET_CURRENT_CONVERSATION,
	GET_CONVERSATIONS,
	GET_CONVERSATIONS_RECEIVED
} from 'redux/constants/conversation';

export function setCurrentConversation (params) {
	return {
		type: SET_CURRENT_CONVERSATION,
		params
	};
}

export function getConversations () {
	return {
		type: GET_CONVERSATIONS,
	};
}

export function getConversationsReceived (params) {
	return {
		type: GET_CONVERSATIONS_RECEIVED,
		params
	};
}
