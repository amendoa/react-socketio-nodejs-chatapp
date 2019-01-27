import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	LoadingComponent
} from 'shared/components';

describe('<LoadingComponent />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<LoadingComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
