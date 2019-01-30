import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	HomeEntry
} from 'entries';

describe('<HomeEntry />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<HomeEntry {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
