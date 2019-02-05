import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	MessageListContainer
} from 'entries/chat/containers';

describe('<MessageListContainer />', () => {
	const modelI = {
		isFetching: false
	};

	const getWrapper = (model) => {
		return shallow((
			<div>
				<MessageListContainer {...model} />
			</div>
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
