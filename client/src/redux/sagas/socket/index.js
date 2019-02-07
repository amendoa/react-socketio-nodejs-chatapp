import {
	getToken
} from 'modules/utils';

import {
	toast
} from 'react-toastify';

import {
	eventChannel
} from 'redux-saga';

import {
	put,
	call,
	fork,
	take,
	cancel,
	takeLatest
} from 'redux-saga/effects';

import constants from 'modules/constants';
import io from 'socket.io-client';
import * as socketActions from 'redux/actions/socket';

import {
	START_CHANNEL,
	STOP_CHANNEL
} from 'redux/constants/socket';

let socket;
let socketTask;

function connectSocket () {
	const socket = io(constants.API.ROOT);
	return new Promise((resolve) => {
		socket.on('connect', () => {
			resolve(socket);
		});
	});
}

function subscribe (socket) {
	return eventChannel(emit => {
		socket.on('message.new', (params) => {
			console.log('message.new');
			console.log(params);
		});

		socket.on('disconnect', () => {
			emit(socketActions.startChannel());
		});

		socket.on('login-error', () => {
			emit(socketActions.startChannel());
		});

		return () => {};
	});
}

function* login (socket) {
	const token = getToken();
	socket.emit('login', {
		token
	});
}

function* read (socket) {
	const channel = yield call(subscribe, socket);
	while (true) {
		const action = yield take(channel);
		yield put(action);
	}
}

function* handleIO (socket) {
	yield fork(login, socket);
	yield fork(read, socket);
}

function* startChanelSaga () {
	try {
		yield put(socketActions.stopChannel());
		socket = yield call(connectSocket);
		yield put(socketActions.serverOn());
		socketTask = yield fork(handleIO, socket);
	} catch (e) {
		toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
	}
}

function* stopChanelSaga () {
	if (socket) {
		socket.off();
		socket.disconnect();
	}

	yield cancel(socketTask);
	yield put(socketActions.serverOff());
}

const sagas = [
	takeLatest(START_CHANNEL, startChanelSaga),
	takeLatest(STOP_CHANNEL, stopChanelSaga)
];

export default sagas;
