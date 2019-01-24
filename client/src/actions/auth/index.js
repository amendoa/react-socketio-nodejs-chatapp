import {
	SIGNIN_POST_FETCH,
	SIGNIN_POST_FETCH_STOP
} from 'redux-constants/auth';

export function signInPostFetch () {
	return {
		type: SIGNIN_POST_FETCH
	};
}

export function signInPostFetchStop () {
	return {
		type: SIGNIN_POST_FETCH_STOP
	};
}
