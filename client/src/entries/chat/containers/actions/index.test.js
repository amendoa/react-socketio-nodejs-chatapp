import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ActionsContainer
} from 'entries/chat/containers';

describe('<ActionsContainer />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<ActionsContainer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
