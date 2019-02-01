import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ConversationCardComponent
} from 'entries/chat/components';

describe('<ConversationCardComponent />', () => {
	const modelI = {
		profile: {
			label: 'AM',
			width: 40,
			height: 40,
			backgroundColor: 'red',
			color: 'white',
			labelFontSize: 12
		},
		title: {
			text: 'teste',
			fontSize: 14,
			maxWidth: 100,
			margin: '0px 0px 0px 14px'
		},
		desc: {
			text: 'Hey there! how are you',
			fontSize: 13,
			maxWidth: 100,
			margin: '0px 0px 0px 14px'
		}
	};

	const getWrapper = (model) => {
		return shallow((
			<ConversationCardComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
