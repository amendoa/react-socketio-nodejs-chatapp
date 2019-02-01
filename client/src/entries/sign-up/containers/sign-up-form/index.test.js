import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	SignUpFormContainer
} from 'entries/sign-up/containers';

describe('<SignUpFormContainer />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<SignUpFormContainer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
