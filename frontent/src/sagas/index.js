import testeSagas from 'sagas/teste';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
	yield all([
		...testeSagas
	]);
}
