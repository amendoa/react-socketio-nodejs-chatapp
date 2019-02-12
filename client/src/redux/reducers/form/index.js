import {
	INIT_FORM,
	UPDATE_FORM,
	SET_FORM_ERROR,
	RESET_FORM
} from 'redux/constants/form';

const initialState = {};

export default function formReducer (state = initialState, action) {
	switch (action.type) {
		case INIT_FORM:
			return Object.assign({}, state, {
				[action.formName]: {
					...action.params
				}
			});

		case UPDATE_FORM:
			return Object.assign({}, state, {
				[action.formName]: Object.assign({}, state[action.formName], {
					...action.params
				})
			});

		case SET_FORM_ERROR:
			return Object.assign({}, state, {
				[action.formName]: Object.assign({}, state[action.formName], {
					errors: {
						...action.params.errors,
						...state[action.formName].errors
					}
				})
			});

		case RESET_FORM:
			return initialState;

		default:
			return state;
	}
}
