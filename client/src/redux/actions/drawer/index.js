import {
	OPEN_DRAWER,
	CLOSE_DRAWER,
	INIT_DRAWER
} from 'redux/constants/drawer';

export function initDrawer (drawerName) {
	return {
		type: INIT_DRAWER,
		drawerName
	};
}

export function openDrawer (drawerName) {
	return {
		type: OPEN_DRAWER,
		drawerName
	};
}

export function closeDrawer (drawerName) {
	return {
		type: CLOSE_DRAWER,
		drawerName
	};
}
