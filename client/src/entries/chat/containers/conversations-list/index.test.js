import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ConversationsList
} from 'entries/chat/containers';

describe('<ConversationsList />', () => {
	const modelI = {
		items: [
			{
				color: 'red'
			}
		]
	};

	const getWrapper = (model) => {
		return shallow((
			<ConversationsList {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
