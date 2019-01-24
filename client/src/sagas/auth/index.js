import { put, takeLatest } from 'redux-saga/effects';
import * as authActions from 'actions/auth';
import {
	SIGNIN_POST_FETCH
} from 'redux-constants/auth';


// POST_SIGNIN
// POST_SIGNIN_RECEIVED
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function* signInPostFetch () {
	try {
		const response = yield fetch('http://0.0.0.0:7070/participation')
			.then(response => response.json());

		yield put(authActions.signInPostFetchStop());
	} catch (e) {
		// TODO GLOBAL ERROR
	}
}

const authSagas = [
	takeLatest(SIGNIN_POST_FETCH, signInPostFetch)
];

export default authSagas;
