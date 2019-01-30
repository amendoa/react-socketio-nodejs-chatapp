import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ChatEntry
} from 'entries';

describe('<ChatEntry />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<ChatEntry {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
