import {
	TESTE_REQUEST,
	REQUEST_ACTION
} from 'redux-constants/teste';

export function testeAction () {
	return {
		type: TESTE_REQUEST,
		result: [
			1,
			2,
			3,
			4,
			5
		]
	};
}

export function requestAction () {
	return {
		type: REQUEST_ACTION,
		result: [
			1,
			2,
			3,
			4,
			5
		]
	};
}
