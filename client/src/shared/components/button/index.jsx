import React, {
	Component
} from 'react';
import classNames from 'classnames';

import {
	SpinnerComponent
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
			disabled
		} = this.props;

		const buttonStyles = classNames({
			button: true,
			'button--primary': primary,
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
					isFetching ? (
						<SpinnerComponent />
					) : text
				}
			</button>
		);
	}
}
