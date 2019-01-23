import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	AuthContainer
} from 'shared/containers';

describe('<AuthContainer />', () => {
	const modelI = {
		title: 'Teste title AuthContainer',
		formContainer: (
			<div>
				<span>
					{
						'teste'
					}
				</span>
			</div>
		),
		footerInfo: (
			<span>
				{
					'info footer'
				}
			</span>
		),
		footerInfoLink: (
			<a href='#teste'>
				{
					'footer link'
				}
			</a>
		)
	};

	const getWrapper = (model) => {
		return shallow((
			<AuthContainer {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
