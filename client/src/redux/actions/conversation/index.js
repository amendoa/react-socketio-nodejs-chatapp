import {
	SET_CURRENT_CONVERSATION,
	GET_CONVERSATIONS,
	GET_CONVERSATIONS_RECEIVED,
	SET_CURRENT_CONVERSATION_MESSAGES,
	ADD_MESSAGE_TO_CURRENT_CONVERSATION_MESSAGES,
	RESET_CONVERSATION
} from 'redux/constants/conversation';

export function reset () {
	return {
		type: RESET_CONVERSATION
	};
}

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

export function setCurrentConversationMessages (params) {
	return {
		type: SET_CURRENT_CONVERSATION_MESSAGES,
		params
	};
}

export function addMessageToCurrentConversationMessages (params) {
	return {
		type: ADD_MESSAGE_TO_CURRENT_CONVERSATION_MESSAGES,
		params
	};
}
