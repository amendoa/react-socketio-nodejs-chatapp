import {
	takeLatest,
	put
} from 'redux-saga/effects';

import {
	sendRequest
} from 'modules/utils';

import {
	toast
} from 'react-toastify';

import {
	GET_CONVERSATIONS,
	SET_CURRENT_CONVERSATION
} from 'redux/constants/conversation';

import * as conversationActions from 'redux/actions/conversation';
import * as messageActions from 'redux/actions/message';
import constants from 'modules/constants';

function* getConversationsFetch () {
	try {
		const response = yield sendRequest({
			url: `${constants.API.ROOT}${constants.API.ACTIONS.CONVERSATION}`,
			method: constants.API.METHODS.GET
		});

		yield put(conversationActions.getConversationsReceived({
			result: response.result
		}));
	} catch (e) {
		yield put(conversationActions.getConversationsReceived({
			result: []
		}));
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

function* setCurrentConversationSaga(action) {
	const {
		user
	} = action.params;

	const {
		_id: userId
	} = user;

	yield put(messageActions.getMessages({
		query: {
			userId
		}
	}));
}

const sagas = [
	takeLatest(GET_CONVERSATIONS, getConversationsFetch),
	takeLatest(SET_CURRENT_CONVERSATION, setCurrentConversationSaga)
];

export default sagas;
