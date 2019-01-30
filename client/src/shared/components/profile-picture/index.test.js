import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ProfilePictureComponent
} from 'shared/components';

describe('<ProfilePictureComponent />', () => {
	const modelI = {
		color: 'white',
		backgroundColor: 'red',
		label: 'teste',
		width: 60,
		height: 60
	};

	const getWrapper = (model) => {
		return shallow((
			<ProfilePictureComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
