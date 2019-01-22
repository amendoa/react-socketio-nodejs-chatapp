import React, {
	Component
} from 'react';
import classNames from 'classnames';

export default class ButtonComponent extends Component {
	render () {
		const {
			text,
			primary,
			link,
			width
		} = this.props;

		const buttonStyles = classNames({
			button: true,
			'button--primary': primary,
			'button--link': link
		});

		return (
			<button
				className={buttonStyles}
				style={{ width }}
			>
				{
					text
				}
			</button>
		);
	}
}
