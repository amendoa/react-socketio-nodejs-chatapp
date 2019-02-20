import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	DropDownMenuComponent
} from 'shared/components';

describe('<DropDownMenuComponent />', () => {
	const modelI = {
		options: [
			{
				text: 'teste',
				event: null
			}
		],
		icon: {},
		marginButton: ''
	};

	const getWrapper = (model) => {
		return render((
			<DropDownMenuComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
