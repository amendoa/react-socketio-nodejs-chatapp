import React, {
	Component
} from 'react';

import {
	LabelComponent
} from 'shared/components';

import classNames from 'classnames';

export default class TagComponent extends Component {
	render () {
		const {
			success,
			text
		} = this.props;

		const tagStyles = classNames({
			tag: true,
			fadeIn: true,
			success
		});

		return (
			<div
				className={tagStyles}
			>
				<LabelComponent
					text={text}
					fontSemiBold
					alignCenter
					defaultLabel
					fontSize={12}
					breakWord
					width={18}
				/>
			</div>
		);
	}
}
