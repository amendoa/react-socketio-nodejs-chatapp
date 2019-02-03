import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ActionsWrapper
} from 'entries/chat/wrappers';

describe('<ActionsWrapper />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<ActionsWrapper {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
