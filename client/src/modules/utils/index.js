import Cookies from 'js-cookie';
import constants from 'modules/constants';
import { fetch } from 'whatwg-fetch';
import queryString from 'querystring';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

export function isDevelopmentEnv () {
	return process.env.NODE_ENV.toLowerCase() === 'development';
}

export function serverErrorsToFrontFormat (errors) {
	const normalizedErrors = {};

	errors.forEach(item => {
		normalizedErrors[item.param] = item.msg;
	});

	return normalizedErrors;
}

export function setCookie (key, value, expires) {
	return Cookies.set(key, value, { expires });
}

export function removeCookie (key) {
	return Cookies.remove(key);
}

export function getCookieJson (key) {
	return Cookies.getJSON(key);
}

export function getCookie (key) {
	return Cookies.get(key);
}

export function setToken (value) {
	return setCookie(constants.GLOBAL.TOKEN_COOKIE_KEY, value, constants.GLOBAL.TOKEN_COOKIE_EXPIRES);
}

export function getToken () {
	return getCookieJson(constants.GLOBAL.TOKEN_COOKIE_KEY);
}

export function removeToken () {
	return removeCookie(constants.GLOBAL.TOKEN_COOKIE_KEY);
}

export function createAcronym (param) {
	return param.toUpperCase().slice(0, 2);
}

export async function sendRequest ({
	url,
	method,
	body,
	query,
	onUnauthorized
}) {
	const token = getToken();
	const fetchParams = {
		method,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			token
		},
	};

	if (body) {
		fetchParams.body = queryString.stringify(body);
	}

	const result = await fetch(query ? url : `${url}?${queryString.stringify(query)}`, fetchParams);

	console.log(onUnauthorized)
	onUnauthorized();

	switch (result.status) {
		case 401:
			removeToken();
			break;

		case 500:
			toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
			break;

		default:
			break;
	}

	return result.json();
}
