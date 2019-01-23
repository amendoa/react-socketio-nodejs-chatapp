import {
	TESTE_REQUEST,
	REQUEST_ACTION
} from 'redux-constants/teste';

const initialState = {
	isFetching: false,
	result: [

	]
};

function testeReducer (state = initialState, action) {
	switch (action.type) {
		case TESTE_REQUEST:
			return Object.assign({}, state, {
				result: action.result
			});
		case REQUEST_ACTION:
			return Object.assign({}, state, {
				result: action.result
			});
		default:
			return state;
	}
}

export default testeReducer;
