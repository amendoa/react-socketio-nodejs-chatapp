import {
	INIT_FORM,
	UPDATE_FORM,
	SET_FORM_ERROR
} from 'redux/constants/form';

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
