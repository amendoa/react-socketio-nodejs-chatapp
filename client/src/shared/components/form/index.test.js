import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	FormComponent
} from 'shared/components';

describe('<FormComponent />', () => {
	const modelI = {
		formName: 'JestForm',
		values: {
			nickname: '',
			password: '',
			confirmPassword: ''
		},
		handleSubmit: () => {
			console.log('handleSumit');
		},
		customErrors: () => {
			const formErrors = {};
			return formErrors;
		},
		validate: () => {
			const formErrors = {};
			return formErrors;
		},
		validateAsync: () => {
		},
		debounceValidation: {
			nickname: 300
		},
		render: ({
			handleSubmit,

		}) => {
			return (
				<form onSubmit={handleSubmit}>

				</form>
			);
		}
	};

	const getWrapper = (model) => {
		return shallow((
			<FormComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
