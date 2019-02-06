import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	FlashMessageComponent
} from 'shared/components';

describe('<FlashMessageComponent />', () => {
	const modelI = {
		message: 'teste message',
		error: true
	};

	const getWrapper = (model) => {
		return shallow((
			<FlashMessageComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
