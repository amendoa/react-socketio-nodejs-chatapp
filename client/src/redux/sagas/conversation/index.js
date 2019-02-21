import {
	takeLatest,
	takeEvery,
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
	SET_CURRENT_CONVERSATION,
	RESET_CONVERSATION_UNREAD_MESSAGES,
	DELETE_CONVERSATION
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

function* resetConversationUnreadtMessagesSaga (action) {
	const {
		partner
	} = action.params;

	const body = {
		partnerId: partner._id,
		conversation: {
			unreadMessages: 0
		}
	};

	try {
		yield sendRequest({
			url: `${constants.API.ROOT}${constants.API.ACTIONS.CONVERSATION}`,
			method: constants.API.METHODS.PUT,
			body
		});
	} catch (e) {
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

function* setCurrentConversationSaga(action) {
	const {
		partner
	} = action.params;

	const {
		_id: partnerId
	} = partner;

	yield put(messageActions.getMessages({
		partnerId
	}));
}

function* deleteConversationFetchSaga(action) {
	const {
		params
	} = action;

	const {
		partnerId
	} = params;

	const body = {
		partnerId
	};

	try {
		yield sendRequest({
			url: `${constants.API.ROOT}${constants.API.ACTIONS.CONVERSATION}`,
			method: constants.API.METHODS.DELETE,
			body
		});

		yield put(conversationActions.deleteConversationReceived());
		yield put(conversationActions.removeConversation({
			partnerId
		}));
	} catch (e) {
		yield put(conversationActions.deleteConversationReceived());
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

const sagas = [
	takeLatest(GET_CONVERSATIONS, getConversationsFetch),
	takeLatest(SET_CURRENT_CONVERSATION, setCurrentConversationSaga),
	takeEvery(RESET_CONVERSATION_UNREAD_MESSAGES, resetConversationUnreadtMessagesSaga),
	takeEvery(DELETE_CONVERSATION, deleteConversationFetchSaga)
];

export default sagas;
