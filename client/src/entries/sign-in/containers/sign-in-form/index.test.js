import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	SignInFormContainer
} from 'entries/sign-in/containers';

describe('<SignInFormContainer />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<SignInFormContainer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
