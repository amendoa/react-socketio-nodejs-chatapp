import React, {
	Component
} from 'react';

import {
	LabelComponent
} from 'shared/components';

import {
	createAcronym
} from 'modules/utils';

import classNames from 'classnames';

export default class ProfilePictureComponent extends Component {
	render () {
		const {
			color,
			backgroundColor,
			label,
			width,
			height,
			labelFontSize,
		} = this.props;

		const profilePictureStyles = classNames({
			'profile-picture': true,
			fadeIn: true
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
					text={createAcronym(label)}
					fontSize={labelFontSize}
				/>
			</div>
		);
	}
}
