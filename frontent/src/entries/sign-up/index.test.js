import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	SignUpEntry
} from 'entries';

describe('<SignUpEntry />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<SignUpEntry {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
