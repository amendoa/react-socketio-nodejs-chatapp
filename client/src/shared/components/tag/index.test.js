import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	TagComponent
} from 'shared/components';

describe('<TagComponent />', () => {
	const modelI = {
		success: true,
		text: 'teste'
	};

	const getWrapper = (model) => {
		return shallow((
			<TagComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
