import React, {
	Component
} from 'react';
import classNames from 'classnames';

import {
	LoadingComponent
} from 'shared/components';

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
			margin
		} = this.props;

		const buttonStyles = classNames({
			button: true,
			'button--primary': primary && !disabled,
			'button--disabled': disabled,
			'button--link': link
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
