import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	InputSearchComponent
} from 'entries/chat/components';

describe('<InputSearchComponent />', () => {
	const modelI = {};

	const getWrapper = (model) => {
		return shallow((
			<div>
				<InputSearchComponent {...model} />
			</div>
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
