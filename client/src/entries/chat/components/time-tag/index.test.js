import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	TimeTagComponent
} from 'entries/chat/components';

describe('<TimeTagComponent />', () => {
	const modelI = {
		text: 'today'
	};

	const getWrapper = (model) => {
		return shallow((
			<div>
				<TimeTagComponent {...model} />
			</div>
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
