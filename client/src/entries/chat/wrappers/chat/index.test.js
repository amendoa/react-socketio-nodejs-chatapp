import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ChatWrapper
} from 'entries/chat/wrappers';

describe('<ChatWrapper />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<ChatWrapper {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
