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
			onFocus,
			onBlur,
			errorMessage,
			hasError,
			name,
			iconComponent
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
				<div className="input-container">
					<input
						id={id}
						className="input"
						type={type}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						onFocus={onFocus}
						onBlur={onBlur}
						style={{
							width
						}}
						name={name}
					/>
					<div className="input-icon-container">
						{
							iconComponent ? iconComponent() : null
						}
					</div>
				</div>
				{
					hasError ? (
						<div className="input-label-container">
							<LabelComponent
								text={errorMessage}
								danger
								style={{
									fontSize: 16,
									fontWeight: 400
								}}
							/>
						</div>
					) : null
				}
			</div>
		);
	}
}
