import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import {
	InputComponent
} from 'shared/components';

describe('<InputComponent />', () => {
	const onChange = sinon.spy();
	const onBlur = sinon.spy();

	const modelI = {
		id: 'nickname',
		placeholder: 'Nickname',
		type: 'text',
		value: 'value',
		onChange,
		onBlur,
		err: true,
		label: 'erro teste'
	};

	const modelII = {
		id: 'password',
		placeholder: 'password',
		type: 'password',
		value: 'value',
		onChange,
		onBlur,
		err: false
	};

	const getWrapper = (model) => {
		return shallow((
			<InputComponent {...model} />
		));
	};

	it('renders correctly', () => {
		const wrapper = getWrapper(modelI);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('has InputTextComponent component', () => {
		const wrapper = getWrapper(modelI);
		expect(wrapper.find('input').length).toBe(1);
	});

	it('has a error span when err param are true', () => {
		const wrapper = getWrapper(modelI);
		expect(wrapper.find('LabelComponent').length).toBe(1);
	});

	it('has no error span when err param are true', () => {
		const wrapper = getWrapper(modelII);
		expect(wrapper.find('span.error-label').length).toBe(0);
	});

	it('blur and change events are working', () => {
		const wrapper = getWrapper(modelI);
		wrapper.find('input').simulate('blur');
		wrapper.find('input').simulate('change');
		expect(onChange.called).toBe(true);
		expect(onBlur.called).toBe(true);
	});
});
