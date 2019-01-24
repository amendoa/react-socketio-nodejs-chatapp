import React, {
	Component
} from 'react';

import classNames from 'classnames';

export default class LabelComponent extends Component {
	render () {
		const {
			text,
			danger,
			style
		} = this.props;

		const spanClassName = classNames({
			label: true,
			danger
		});

		return (
			<span
				className={spanClassName}
				style={style}
			>
				{
					text
				}
			</span>
		);
	}
}
