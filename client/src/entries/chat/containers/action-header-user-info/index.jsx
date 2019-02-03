import React, {
	Component
} from 'react';

import {
	ProfilePictureComponent,
	LabelComponent,
	SketchComponent
} from 'shared/components';

export default class ActionHeaderUserInfo extends Component {
	render () {
		const {
			isFetching
		} = this.props;

		if (isFetching) {
			return (
				<div>
					<SketchComponent
						width={60}
						height={60}
						circle
					/>
					<SketchComponent
						width={90}
						height={10}
						margin='10px 0px 0px 0px'
					/>
				</div>
			);
		}

		return (
			<div>
				<ProfilePictureComponent
					color="white"
					backgroundColor="#1461ff"
					label="AM"
					width={60}
					height={60}
				/>
				<LabelComponent
					fontSemiBold
					dark
					text='Amendowins'
					fontSize={16}
					margin="10px 0px 0px 0px"
				/>
			</div>
		);
	}
}
