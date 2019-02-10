import {
	POST_MESSAGE,
	POST_MESSAGE_RECEIVED
} from 'redux/constants/message';

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
