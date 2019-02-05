import React, {
	Component
} from 'react';

import {
	LabelComponent
} from 'shared/components';

export default class TimeTagComponent extends Component {
	render () {
		const {
			text
		} = this.props;

		return (
			<div
				className='time-tag fadeIn'
			>
				<LabelComponent
					fontBold
					defaultLabel
					text={text.toUpperCase()}
					fontSize={10}
					margin="0px 0px 0px 0px"
				/>
			</div>
		);
	}
}
