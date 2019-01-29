import authSagas from 'redux/sagas/auth';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([
		...authSagas
	]);
}
