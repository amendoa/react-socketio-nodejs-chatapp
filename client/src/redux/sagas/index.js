import {
	all
} from 'redux-saga/effects';

import authSagas from 'redux/sagas/auth';
import contactSagas from 'redux/sagas/contact';
import socketSagas from 'redux/sagas/socket';
import messageSagas from 'redux/sagas/message';
import conversationSagas from 'redux/sagas/conversation';

export default function* rootSaga() {
	yield all([
		...authSagas,
		...contactSagas,
		...socketSagas,
		...messageSagas,
		...conversationSagas
	]);
}
