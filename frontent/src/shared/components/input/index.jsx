import React, {
	Component
} from 'react';

import {
	LabelComponent
} from 'shared/components';

export default class InputComponent extends Component {
	render () {
		const {
			placeholder,
			width,
			marginTop,
			marginBottom,
			type,
			id,
			value,
			onChange,
			onBlur,
			err,
			label
		} = this.props;

		return (
			<div
				className="input-wrapper"
				style={{
					marginTop,
					marginBottom,
					maxWidth: width
				}}
			>
				<input
					id={id}
					className="input"
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					style={{
						width
					}}
				/>
				<LabelComponent
					text={label}
					danger
					style={{
						fontSize: 16,
						fontWeight: 400
					}}
				/>
			</div>
		);
	}
}
