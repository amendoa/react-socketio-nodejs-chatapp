import React, {
	Component
} from 'react';

import {
	ProfilePictureComponent,
	LabelComponent
} from 'shared/components';

export default class UserCardContainer extends Component {
	render () {
		const {
			profile,
			title,
			desc
		} = this.props;

		return (
			<div className='user-card-wrapper'>
				<div className='user-card-container'>
					<ProfilePictureComponent
						{
						...profile
						}
					/>
					<div className='card-info-container'>
						<LabelComponent
							fontSemiBold
							dark
							breakWord
							{
							...title
							}
						/>
						<LabelComponent
							fontRegular
							dark
							breakWord
							{
							...desc
							}
						/>
					</div>
				</div>
			</div>
		);
	}
}
