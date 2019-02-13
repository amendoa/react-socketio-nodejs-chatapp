import Cookies from 'js-cookie';
import constants from 'modules/constants';
import { fetch } from 'whatwg-fetch';
import queryString from 'querystring';
import { toast } from 'react-toastify';
import history from 'react-router/history';
import store from 'redux/store';
import _ from 'lodash';
import moment from 'moment';
import * as authActions from 'redux/actions/auth';
import * as contactActions from 'redux/actions/contact';
import * as conversationActions from 'redux/actions/conversation';
import * as drawerActions from 'redux/actions/drawer';
import * as formActions from 'redux/actions/form';
import * as messageActions from 'redux/actions/message';
import * as socketActions from 'redux/actions/socket';

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

export function setUser (value) {
	return setCookie(constants.GLOBAL.USER_COOKIE_KEY, value, constants.GLOBAL.USER_COOKIE_EXPIRES);
}

export function getToken () {
	return getCookieJson(constants.GLOBAL.TOKEN_COOKIE_KEY);
}

export function getUser () {
	return getCookieJson(constants.GLOBAL.USER_COOKIE_KEY);
}

export function removeToken () {
	return removeCookie(constants.GLOBAL.TOKEN_COOKIE_KEY);
}

export function removeUser () {
	return removeCookie(constants.GLOBAL.USER_COOKIE_KEY);
}

export function createAcronym (param) {
	return (param || '').toUpperCase().slice(0, 2);
}

export function resetRedux () {
	const {
		dispatch
	} = store;

	const {
		reset: resetAuth
	} = authActions;
	const {
		reset: resetContact
	} = contactActions;
	const {
		reset: resetConversation
	} = conversationActions;
	const {
		reset: resetDrawer
	} = drawerActions;
	const {
		reset: resetForm
	} = formActions;
	const {
		reset: resetMessages
	} = messageActions;
	const {
		reset: resetSocket
	} = socketActions;

	dispatch(resetAuth());
	dispatch(resetContact());
	dispatch(resetConversation());
	dispatch(resetDrawer());
	dispatch(resetForm());
	dispatch(resetMessages());
	dispatch(resetSocket());
}

export async function logout () {
	const {
		dispatch
	} = store;

	const {
		stopChannel
	} = socketActions;

	dispatch(stopChannel());
	removeToken();
	removeUser();
	resetRedux();
	history.push('/signin');
}

export async function login (token, user) {
	resetRedux();
	setToken(token);
	setUser(user);
	history.push('/');
}

export async function sendRequest ({
	url,
	method,
	body,
	query
}) {
	const token = getToken();
	const fetchParams = {
		method,
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': token
		},
		body
	};

	if (body) {
		fetchParams.body = JSON.stringify(body);
	}

	const result = await fetch(query ? `${url}?${queryString.stringify(query)}` : url, fetchParams);

	switch (result.status) {
		case 401:
			logout();
			break;

		case 500:
			toast.error(constants.LABELS.MAIN.GLOBAL_ERROR);
			break;

		default:
			break;
	}

	return result.json();
}

export function searchParam (array, params) {
	let result = array;

	_.mapKeys(params, (value, key) => {
		if (value) {
			result = _.filter(array, (model) => {
				return _.includes(model[key], value.toLowerCase());
			});
		}
	});

	return result;
}

export function setConversationLastMessageDateTime (date) {
	const diffHours = moment(new Date()).diff(moment(date), 'hour');
	const diffDays = moment(new Date()).startOf('day').diff(moment(date).startOf('day'), 'day');

	if (diffHours <= 0) {
		return moment(date).fromNow(true);
	}

	if (diffDays <= 0) {
		return moment(date).format('HH:mm');
	}

	if (diffDays <= 6) {
		if (diffDays === 1) {
			return 'yesterday';
		}

		return moment(date).format('dddd');
	}

	return moment(date).format('DD/MM/YYYY');
}
