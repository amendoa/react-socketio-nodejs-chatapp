import {
	INIT_FORM,
	UPDATE_FORM,
	SET_FORM_ERROR,
	RESET_FORM
} from 'redux/constants/form';

export function reset () {
	return {
		type: RESET_FORM
	};
}

export function initForm (formName, params) {
	return {
		type: INIT_FORM,
		formName,
		params
	};
}

export function updateForm (formName, params) {
	return {
		type: UPDATE_FORM,
		formName,
		params
	};
}

export function setFormError (formName, params) {
	return {
		type: SET_FORM_ERROR,
		formName,
		params
	};
}
