import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ActionHeaderUserInfo
} from 'entries/chat/containers';

describe('<ActionHeaderUserInfo />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<ActionHeaderUserInfo {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
