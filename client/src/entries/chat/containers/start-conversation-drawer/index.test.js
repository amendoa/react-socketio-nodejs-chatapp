import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	StartConversationDrawer
} from 'entries/chat/containers';

describe('<StartConversationDrawer />', () => {
	const modelI = {
		items: [
			{
				color: 'red'
			}
		]
	};

	const getWrapper = (model) => {
		return shallow((
			<StartConversationDrawer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
