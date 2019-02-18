import {
	OPEN_DRAWER,
	CLOSE_DRAWER,
	INIT_DRAWER
} from 'redux/constants/drawer';

import {
	RESET
} from 'redux/constants/main';

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

		case RESET:
			return initialState;

		default:
			return state;
	}
}
