import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	AddContactDrawer
} from 'entries/chat/containers';

describe('<AddContactDrawer />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<AddContactDrawer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
