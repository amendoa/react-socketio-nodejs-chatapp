import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
	ContentEditableComponent
} from 'shared/components';

describe('<ContentEditableComponent />', () => {
	const modelI = {
		isFetching: false
	};

	const getWrapper = (model) => {
		return shallow((
			<div>
				<ContentEditableComponent {...model} />
			</div>
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
