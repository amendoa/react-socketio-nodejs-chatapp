import React, {
	Component
} from 'react';

import {
	UserInfoComponent
} from 'entries/chat/components';

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
				onKeyDown={() => {}}
			>
				<div className='conversation-card--container'>
					<UserInfoComponent
						profile={profile}
						title={title}
						desc={desc}
						rightLabel={rightLabel}
						wrapperStyle={{
							width: '100%',
							justifyContent: 'space-between'
						}}
					/>
				</div>
			</div>
		);
	}
}
