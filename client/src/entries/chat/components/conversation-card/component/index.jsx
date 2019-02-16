import React, {
	Component
} from 'react';

import {
	UserInfoComponent
} from 'entries/chat/components';

import classNames from 'classnames';

export default class ConversationCardComponent extends Component {
	render () {
		const {
			profile,
			title,
			desc,
			onClick,
			rightLabel,
			tagInfo,
			active,
			actions,
			isFetching,
			isFetchingAction
		} = this.props;

		const conversationCardStyles = classNames({
			'conversation-card': true,
			active
		});

		return (
			<div
				role='button'
				tabIndex='-1'
				className={conversationCardStyles}
				onClick={(event) => {
					event.preventDefault();
					event.stopPropagation();
					onClick(event);
				}}
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
						tagInfo={tagInfo}
						actions={actions}
						isFetching={isFetching}
						isFetchingAction={isFetchingAction}
					/>
				</div>
			</div>
		);
	}
}
