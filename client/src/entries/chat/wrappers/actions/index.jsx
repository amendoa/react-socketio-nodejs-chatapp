import React, {
	Component
} from 'react';

import {
	IconComponent,
	InputComponent,
	ButtonComponent,
	DrawerComponent
} from 'shared/components';

import {
	ConversationsList,
	AddFriendDrawer,
	StartConversationDrawer,
	ActionHeaderUserInfo
} from 'entries/chat/containers';

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

export default class ActionsWrapper extends Component {
	constructor (props) {
		super(props);

		this.state = {
			addFriendDrawer: {
				isOpen: false
			},
			startConversationDrawer: {
				isOpen: false
			}
		};
	}

	render () {
		const {
			addFriendDrawer,
			startConversationDrawer
		} = this.state;

		return (
			<div className='actions-wrapper'>
				<header className='header-container'>
					<div className='header-content'>
						<ActionHeaderUserInfo
							isFetching={false}
						/>
						<div>
							<ButtonComponent
								type='button'
								width={26}
								height={26}
								link
								onClick={() => {
									console.log('teste');
									this.setState({
										addFriendDrawer: {
											isOpen: true
										}
									});
								}}
							>
								<IconComponent
									fill="#555657"
									icon="account-plus"
									width={26}
									height={26}
								/>
							</ButtonComponent>
							<ButtonComponent
								type='button'
								width={26}
								height={26}
								margin="0px 0px 0px 20px"
								link
								onClick={() => {
									this.setState({
										startConversationDrawer: {
											isOpen: true
										}
									});
								}}
							>
								<IconComponent
									fill="#555657"
									icon="message-text"
									width={26}
									height={26}
								/>
							</ButtonComponent>
							<ButtonComponent
								type='button'
								width={26}
								height={26}
								margin="0px 0px 0px 20px"
								link
								onClick={() => {
									this.setState({
										startConversationDrawer: {
											isOpen: true
										}
									});
								}}
							>
								<IconComponent
									fill="#555657"
									icon="message-text"
									width={26}
									height={26}
								/>
							</ButtonComponent>
						</div>
					</div>
				</header>
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
					emptyMessage={constants.LABELS.CHAT.NO_CONVERSATIONS_TO_SHOW}
					onClickItem={() => { console.log('onClickItem'); }}
				/>
				<DrawerComponent
					isOpen={addFriendDrawer.isOpen}
					title={constants.LABELS.CHAT.ADD_FRIEND}
					handleGoBack={() => {
						this.setState({
							addFriendDrawer: {
								isOpen: false
							}
						});
					}}
				>
					<AddFriendDrawer />
				</DrawerComponent>
				<DrawerComponent
					isOpen={startConversationDrawer.isOpen}
					title={constants.LABELS.CHAT.NEW_CONVERSATION}
					handleGoBack={() => {
						this.setState({
							startConversationDrawer: {
								isOpen: false
							}
						});
					}}
				>
					<StartConversationDrawer />
				</DrawerComponent>
			</div>
		);
	}
}
