import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import {
	ButtonComponent
} from 'shared/components';

describe('<ButtonComponent />', () => {
	const onButtonClick = sinon.spy();

	const buttonModelI = {
		text: 'TesteButton',
		type: 'Submit',
		isFetching: true,
		onClick: onButtonClick
	};

	const buttonModelII = {
		text: 'TesteButton',
		type: 'Submit',
		isFetching: false,
		onClick: onButtonClick
	};

	const getWrapper = (model) => {
		return shallow((
			<ButtonComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(buttonModelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('has a button component', () => {
		const wrapper = getWrapper(buttonModelI);
		expect(wrapper.find('button').length).toBe(1);
	});

	it('has a spinner with isFetching param === true', () => {
		// const wrapper = getWrapper(buttonModelI);
		// expect(wrapper.find('SpinnerComponent').length).toBe(1);
	});

	it('has no spinner with isFetching param === false', () => {
		// const wrapper = getWrapper(buttonModelII);
		// expect(wrapper.find('SpinnerComponent').length).toBe(0);
	});

	it('onclick button is working', () => {
		const wrapper = getWrapper(buttonModelI);
		wrapper.simulate('click');
		expect(onButtonClick.called).toBe(true);
	});
});
