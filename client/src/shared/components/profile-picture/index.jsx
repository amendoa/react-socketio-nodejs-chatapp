import React, {
	Component
} from 'react';
import classNames from 'classnames';
import {
	LabelComponent
} from 'shared/components';

export default class ProfilePictureComponent extends Component {
	render () {
		const {
			color,
			backgroundColor,
			label,
			width,
			height,
			labelFontSize
		} = this.props;

		const profilePictureStyles = classNames({
			'profile-picture': true
		});

		return (
			<div
				className={profilePictureStyles}
				style={{
					backgroundColor,
					color,
					width,
					height
				}}
			>
				<LabelComponent
					fontBold
					text={label}
					fontSize={labelFontSize}
				/>
			</div>
		);
	}
}
