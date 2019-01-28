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
			marginTop,
			onClick,
			type,
			isFetching,
			disabled,
			children
		} = this.props;

		const buttonStyles = classNames({
			button: true,
			'button--primary': primary && !disabled,
			'button--disabled': disabled,
			'button--link': link
		});

		return (
			<button
				onClick={onClick}
				className={buttonStyles}
				style={{
					width,
					marginTop
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
