import React, {
	Component
} from 'react';

import {
	LabelComponent
} from 'shared/components';

import classNames from 'classnames';

export default class MessageComponent extends Component {
	render () {
		const {
			right,
			left,
			text,
			time
		} = this.props;

		const messageStyles = classNames({
			message: true,
			fadeIn: true,
			right,
			left
		});

		const labelsParams = {};

		if (right) {
			labelsParams.defaultLabel = true;
		}

		return (
			<div
				className={messageStyles}
			>
				<LabelComponent
					fontSemiBold
					text={text}
					fontSize={13}
					margin="0px 0px 0px 0px"
					{
					...labelsParams
					}
				/>
				<div
					className='time-container'
				>
					<LabelComponent
						fontSemiBold
						text={time}
						fontSize={11}
						margin="0px 0px 0px 0px"
						{
						...labelsParams
						}
					/>
				</div>
			</div>
		);
	}
}
