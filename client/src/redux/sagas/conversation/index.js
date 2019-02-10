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
	GET_CONVERSATIONS
} from 'redux/constants/conversation';

import * as conversationActions from 'redux/actions/conversation';
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

const sagas = [
	takeLatest(GET_CONVERSATIONS, getConversationsFetch),
];

export default sagas;
