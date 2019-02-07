import {
	SERVER_ON,
	SERVER_OFF
} from 'redux/constants/socket';

const initialState = {
	serverIsOn: false
};

export default function socketReducer (state = initialState, action) {
	switch (action.type) {
		case SERVER_ON:
			return Object.assign({}, state, {
				serverIsOn: true
			});

		case SERVER_OFF:
			return Object.assign({}, state, {
				serverIsOn: false
			});

		default:
			return state;
	}
}
