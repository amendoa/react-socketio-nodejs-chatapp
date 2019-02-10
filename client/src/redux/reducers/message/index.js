import {
	POST_MESSAGE,
	POST_MESSAGE_RECEIVED
} from 'redux/constants/message';

const initialState = {
	postMessage: {
		isFetching: false
	}
};

export default function messageReducer (state = initialState, action) {
	switch (action.type) {
		case POST_MESSAGE:
			return Object.assign({}, state, {
				postMessage: Object.assign({}, state.postMessage, {
					isFetching: true
				})
			});

		case POST_MESSAGE_RECEIVED:
			return Object.assign({}, state, {
				postMessage: Object.assign({}, state.postMessage, {
					isFetching: false
				})
			});

		default:
			return state;
	}
}
