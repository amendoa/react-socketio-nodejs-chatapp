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
			fontSemiBold,
			fontMedium,
			fontRegular,
			margin,
			breakWord,
			maxWidth,
			alignCenter
		} = this.props;

		const spanClassName = classNames({
			label: true,
			fadeIn: true,
			danger,
			dark,
			'font-bold': fontBold,
			'font-semi-bold': fontSemiBold,
			'font-medium': fontMedium,
			'font-regular': fontRegular,
			'break-word': breakWord,
			'align-center': alignCenter,
			default: defaultLabel
		});

		return (
			<span
				className={spanClassName}
				style={{
					margin,
					fontSize,
					maxWidth
				}}
			>
				{
					text
				}
			</span>
		);
	}
}
