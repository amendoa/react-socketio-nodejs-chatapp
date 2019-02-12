import {
	POST_MESSAGE,
	POST_MESSAGE_RECEIVED,
	GET_MESSAGES,
	GET_MESSAGES_RECEIVED,
	RESET_MESSAGE
} from 'redux/constants/message';

export function reset () {
	return {
		type: RESET_MESSAGE
	};
}

export function postMessage (params) {
	return {
		type: POST_MESSAGE,
		params
	};
}

export function postMessageReceived (params) {
	return {
		type: POST_MESSAGE_RECEIVED,
		params
	};
}

export function getMessages (params) {
	return {
		type: GET_MESSAGES,
		params
	};
}

export function getMessagesReceived () {
	return {
		type: GET_MESSAGES_RECEIVED
	};
}
