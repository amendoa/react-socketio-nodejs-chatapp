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
	delay,
	takeEvery
} from 'redux-saga/effects';

import constants from 'modules/constants';
import io from 'socket.io-client';
import * as socketActions from 'redux/actions/socket';

import {
	SERVER_OFF,
	START_CHANNEL,
	STOP_CHANNEL
} from 'redux/constants/socket';

// ------------------------------------- startChannel
// ------------------------------------- stopChannel

function connectSocket () {
	const socket = io(constants.API.ROOT);
	return new Promise((resolve) => {
		socket.on('connect', () => {
			resolve(socket);
		});
	});
}

function subscribe (socket) {
	console.log('subscribe')
	return eventChannel(emit => {
		console.log('eventChannel')
		socket.on('message.new', (params) => {
			console.log('message.new');
			console.log(params);
		});

		socket.on('disconnect', () => {
			emit(socketActions.serverOff());
		});

		socket.on('login-error', () => {
			emit(socketActions.serverOff());
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

function* socketFlow () {
	//while (true) {
		try {
			yield take(START_CHANNEL);
			const socket = yield call(connectSocket);
			yield put(socketActions.serverOn());
			const task = yield fork(handleIO, socket);

			yield take(SERVER_OFF);
			socket.off();
			socket.disconnect();
			console.log('server off');
			yield cancel(task);
		} catch (e) {
			toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
		}
	//}
}

function* teste () {
	console.log('stop channel');
	socket.off();
	socket.disconnect();
}

const sagas = [
	fork(socketFlow),
	takeEvery(STOP_CHANNEL, teste)
];

export default sagas;
