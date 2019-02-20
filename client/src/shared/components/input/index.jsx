import React, {
	Component
} from 'react';

import {
	LabelComponent
} from 'shared/components';

import classNames from 'classnames';

export default class InputComponent extends Component {
	render () {
		const {
			placeholder,
			width,
			height,
			margin,
			type,
			id,
			value,
			onChange,
			onFocus,
			onBlur,
			errorMessage,
			hasError,
			name,
			iconComponent,
			autoComplete,
			maxLength,
			defaultButton,
			search,
			clean,
			iconLeft,
			iconRight
		} = this.props;

		const inputStyles = classNames({
			input: true,
			default: defaultButton,
			search,
			clean,
			'input--error': hasError
		});

		const iconContainerStyles = classNames({
			'input-icon-container': true,
			'icon-left': iconLeft,
			'icon-right': iconRight
		});

		return (
			<div
				className="input-wrapper"
				style={{
					margin,
					maxWidth: width
				}}
			>
				<div className="input-container">
					<input
						id={id}
						className={inputStyles}
						type={type}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						onFocus={onFocus}
						onBlur={onBlur}
						style={{
							width,
							height
						}}
						name={name}
						autoComplete={autoComplete}
						maxLength={maxLength}
					/>
					<div className={iconContainerStyles}>
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
								fontSize={16}
								fontRegular
							/>
						</div>
					) : null
				}
			</div>
		);
	}
}
