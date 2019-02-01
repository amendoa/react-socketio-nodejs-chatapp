import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ChatContainer
} from 'entries/chat/containers';

describe('<ChatContainer />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<ChatContainer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
