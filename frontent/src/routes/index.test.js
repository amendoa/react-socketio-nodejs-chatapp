import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RoutesContainer from 'routes';

describe('<RoutesContainer />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<RoutesContainer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
