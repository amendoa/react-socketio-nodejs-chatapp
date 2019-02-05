import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	MessageComponent,
	MessageSketch
} from 'entries/chat/components';

describe('<MessageComponent />', () => {
	const modelI = {
		right: true,
		text: 'Hey there! how are you you you you?',
		time: '12:23'
	};

	const getWrapper = (model) => {
		return shallow((
			<div>
				<MessageComponent {...model} />
				<MessageSketch {...model} />
			</div>
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
