import React, {
	Component
} from 'react';

import classNames from 'classnames';

export default class LabelComponent extends Component {
	render () {
		const {
			text,
			danger,
			fontSize,
			defaultLabel,
			dark,
			fontBold,
			fontMedium,
			margin
		} = this.props;

		const spanClassName = classNames({
			label: true,
			danger,
			dark,
			'font-bold': fontBold,
			'font-medium': fontMedium,
			default: defaultLabel
		});

		return (
			<span
				className={spanClassName}
				style={{
					margin,
					fontSize
				}}
			>
				{
					text
				}
			</span>
		);
	}
}
