import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	DropDownMenuComponent
} from 'shared/components';

describe('<DropDownMenuComponent />', () => {
	const modelI = {
		options: [
			{
				text: 'teste'
			}
		]
	};

	const getWrapper = (model) => {
		return shallow((
			<DropDownMenuComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
