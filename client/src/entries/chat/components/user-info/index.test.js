import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	UserInfoComponent
} from 'entries/chat/components';

describe('<UserInfoComponent />', () => {
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
			text: 'Amendowins',
			fontSize: 13,
			maxWidth: 100,
			margin: '0px 0px 0px 14px'
		},
		desc: {
			text: 'Hey there! how are you',
			fontSize: 13,
			maxWidth: 100,
			margin: '0px 0px 0px 14px'
		},
		rightLabel: 'right label',
		wrapperStyle: {
			width: '100%',
			justifyContent: 'space-between'
		}
	};

	const getWrapper = (model) => {
		return shallow((
			<UserInfoComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
