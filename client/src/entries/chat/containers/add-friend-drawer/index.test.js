import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	AddFriendDrawer
} from 'entries/chat/containers';

describe('<AddFriendDrawer />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<AddFriendDrawer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
