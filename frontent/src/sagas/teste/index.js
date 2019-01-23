import { put, takeLatest } from 'redux-saga/effects';

import {
	REQUEST_ACTION
} from 'redux-constants/teste';

import * as testeActions from 'actions/teste';

function* teste () {
	yield put(testeActions.testeAction());
}

const testeSagas = [
	takeLatest(REQUEST_ACTION, teste)
];

export default testeSagas;
