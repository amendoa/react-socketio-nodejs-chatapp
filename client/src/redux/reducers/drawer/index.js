import {
	OPEN_DRAWER,
	CLOSE_DRAWER,
	INIT_DRAWER,
	RESET_DRAWER
} from 'redux/constants/drawer';

const initialState = {};

export default function drawerReducer (state = initialState, action) {
	switch (action.type) {
		case INIT_DRAWER:
			return Object.assign({}, state, {
				[action.drawerName]: {
					isOpen: false
				}
			});

		case OPEN_DRAWER:
			return Object.assign({}, state, {
				[action.drawerName]: {
					isOpen: true
				}
			});

		case CLOSE_DRAWER:
			return Object.assign({}, state, {
				[action.drawerName]: {
					isOpen: false
				}
			});

		case RESET_DRAWER:
			return initialState;

		default:
			return state;
	}
}
