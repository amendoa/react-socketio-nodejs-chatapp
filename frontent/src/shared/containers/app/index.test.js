import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	AppContainer
} from 'shared/containers';

describe('<AppContainer />', () => {
	const modelI = {
		children: (
			<div>
				<h1> teste h1 </h1>
				<span> teste span </span>
			</div>
		)
	};

	const getWrapper = (model) => {
		return shallow((
			<AppContainer>
				{
					model.children
				}
			</AppContainer>
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
