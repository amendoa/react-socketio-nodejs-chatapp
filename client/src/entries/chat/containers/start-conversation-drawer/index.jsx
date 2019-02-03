import React, {
	Component
} from 'react';

import {
	ConversationsList
} from 'entries/chat/containers';

import {
	InputComponent,
	IconComponent
} from 'shared/components';

import constants from 'modules/constants';

const conversations = [
	{
		color: '#1461ff'
	},
	{
		color: '#dbcc86'
	},
	{
		color: '#d89389'
	},
	{
		color: '#1461ff'
	},
	{
		color: '#dbcc86'
	},
	{
		color: '#d89389'
	},
	{
		color: '#1461ff'
	},
	{
		color: '#dbcc86'
	},
	{
		color: '#d89389'
	},
	{
		color: '#1461ff'
	},
	{
		color: '#dbcc86'
	},
	{
		color: '#d89389'
	}
];

export default class StartConversationDrawer extends Component {
	render () {
		return (
			<div className='start-conversation-drawer-wrapper'>
				<div>
					<InputComponent
						type='text'
						autoComplete='off'
						onChange={() => {}}
						onFocus={() => {}}
						onBlur={() => {}}
						maxLength={15}
						search
						iconComponent={() => {
							return (
								<IconComponent
									fill="#555657"
									icon="search"
									width={28}
									height={28}
									margin="0px 0px 0px 2px"
								/>
							);
						}}
					/>
				</div>
				<ConversationsList
					items={conversations}
					isFetching={false}
					emptyMessage={constants.LABELS.CHAT.NO_CONTACTS_TO_SHOW}
					onClickItem={() => { console.log('onClickItem'); }}
				/>
			</div>
		);
	}
}
