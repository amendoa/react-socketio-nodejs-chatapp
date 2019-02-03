import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	SketchComponent
} from 'shared/components';

describe('<SketchComponent />', () => {
	const modelI = {
		circle: true,
		width: 40,
		height: 40
	};

	const getWrapper = (model) => {
		return shallow((
			<SketchComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
