import constants from 'modules/constants';
import * as messageActions from 'redux/actions/message';

import {
	takeLatest,
	put
} from 'redux-saga/effects';

import {
	sendRequest
} from 'modules/utils';

import {
	POST_MESSAGE
} from 'redux/constants/message';

import {
	toast
} from 'react-toastify';

function* sendMessagePostFetchSaga (action) {
	const {
		body
	} = action.params;

	try {
		yield sendRequest({
			url: `${constants.API.ROOT}${constants.API.ACTIONS.MESSAGE}`,
			method: constants.API.METHODS.POST,
			body
		});

		yield put(messageActions.postMessageReceived());
	} catch (e) {
		yield put(messageActions.postMessageReceived());
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

const sagas = [
	takeLatest(POST_MESSAGE, sendMessagePostFetchSaga)
];

export default sagas;
