import Cookies from 'js-cookie';
import constants from 'modules/constants';

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
