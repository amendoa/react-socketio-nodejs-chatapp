import React, {
	Component
} from 'react';

import {
	ProfilePictureComponent,
	LabelComponent
} from 'shared/components';

export default class ConversationCardComponent extends Component {
	render () {
		const {
			profile,
			title,
			desc,
			onClick,
			rightLabel
		} = this.props;

		return (
			<div
				role='button'
				tabIndex='-1'
				className='conversation-card'
				onClick={onClick}
				onKeyDown={onClick}
				onKeyUp={onClick}
				onKeyPress={onClick}
			>
				<div className='conversation-card--container'>
					<div className='user-info-container'>
						<ProfilePictureComponent
							{
							...profile
							}
						/>
						<div className='user-info-content'>
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
					<LabelComponent
						fontRegular
						text={rightLabel}
						fontSize={13}
						margin="0px 0px 0px 0px"
					/>
				</div>
			</div>
		);
	}
}
