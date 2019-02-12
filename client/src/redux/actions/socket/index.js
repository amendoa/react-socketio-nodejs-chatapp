import {
	START_CHANNEL,
	STOP_CHANNEL,
	SERVER_ON,
	SERVER_OFF,
	RESET_SOCKET
} from 'redux/constants/socket';

export function reset () {
	return {
		type: RESET_SOCKET
	};
}

export function startChannel () {
	return {
		type: START_CHANNEL
	};
}

export function stopChannel () {
	return {
		type: STOP_CHANNEL
	};
}

export function serverOn () {
	return {
		type: SERVER_ON
	};
}

export function serverOff () {
	return {
		type: SERVER_OFF
	};
}
