import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	DrawerComponent
} from 'shared/components';

describe('<DrawerComponent />', () => {
	const modelI = {
		isOpen: true
	};

	const getWrapper = (model) => {
		return shallow((
			<DrawerComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
