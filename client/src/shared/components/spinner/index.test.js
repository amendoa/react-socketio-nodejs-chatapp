import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	SpinnerComponent
} from 'shared/components';

describe('<SpinnerComponent />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<SpinnerComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
