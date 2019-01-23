import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	LabelComponent
} from 'shared/components';

describe('<LabelComponent />', () => {
	const modelI = {
		text: 'Label teste',
		danger: true,
		style: {
			fontSize: 10
		}
	};

	const getWrapper = (model) => {
		return shallow((
			<LabelComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('has a span component', () => {
		const wrapper = getWrapper(modelI);
		expect(wrapper.find('span').length).toBe(1);
	});

	it('span text content is equals modelI text', () => {
		const wrapper = getWrapper(modelI);
		expect(wrapper.find('span').text()).toBe(modelI.text);
	});
});
