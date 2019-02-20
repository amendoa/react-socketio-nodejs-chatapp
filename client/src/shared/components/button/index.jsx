import React, {
	Component
} from 'react';

import {
	LoadingComponent
} from 'shared/components';

import classNames from 'classnames';

export default class ButtonComponent extends Component {
	render () {
		const {
			text,
			primary,
			link,
			width,
			onClick,
			type,
			isFetching,
			disabled,
			children,
			margin,
			defaultButton,
			outline,
			small,
			setRef
		} = this.props;

		const buttonStyles = classNames({
			button: true,
			'button--primary': primary && !disabled,
			'button--disabled': disabled,
			'button--link': link,
			'button--default': defaultButton && !disabled,
			outline,
			small
		});

		return (
			<button
				onClick={(event) => {
					event.stopPropagation();
					if (onClick) {
						onClick(event);
					}
				}}
				className={buttonStyles}
				style={{
					width,
					margin
				}}
				type={type}
				disabled={disabled}
				ref={setRef}
			>
				{
					isFetching && !disabled ? (
						<LoadingComponent
							type='spinner'
						/>
					) : text
				}
				{
					children
				}
			</button>
		);
	}
}
