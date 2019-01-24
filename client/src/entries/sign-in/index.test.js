import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	SignInEntry
} from 'entries';

describe('<SignInEntry />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<SignInEntry {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
