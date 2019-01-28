import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	IconComponent
} from 'shared/components';

describe('<IconComponent />', () => {
	const modelI = {
		type: 'checked',
		fill: 'red'
	};

	const getWrapper = (model) => {
		return shallow((
			<IconComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('has a svg component', () => {
		const wrapper = getWrapper(modelI);
		expect(wrapper.find('svg').length).toBe(1);
	});
});
