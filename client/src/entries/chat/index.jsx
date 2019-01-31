import React, {
	Component
} from 'react';

import {
	ProfilePictureComponent,
	ButtonComponent,
	IconComponent,
	LabelComponent,
	InputComponent,
	DrawerComponent
} from 'shared/components';

import {
	ConversationCardContainer
} from 'entries/chat/containers';

export default class HomeEntry extends Component {
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

	renderActionsContainer = () => {
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

		const {
			addFriendDrawer,
			startConversationDrawer
		} = this.state;

		return (
			<div className='actions-container'>
				<header className='header-container'>
					<div className='header-content'>
						<div>
							<ProfilePictureComponent
								color="white"
								backgroundColor="#1461ff"
								label="AM"
								width={60}
								height={60}
							/>
						</div>
						<div>
							<ButtonComponent
								type='button'
								width={26}
								height={26}
								link
								onClick={() => {
									this.setState({
										addFriendDrawer: {
											isOpen: true
										}
									})
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
									})
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
					<LabelComponent
						fontSemiBold
						dark
						text='Amendowins'
						fontSize={16}
						margin="10px 0px 0px 0px"
					/>
				</header>
				<div>
					<InputComponent
						type='text'
						autoComplete='off'
						onChange={() => {}}
						onFocus={() => {}}
						onBlur={() => {}}
						maxLength={15}
						searchButton
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
				<div className='conversations-container'>
					{
						conversations.map((item, key) => {
							return (
								<div key={key}>
									<ConversationCardContainer
										onClick={() => {
											console.log('teste');
										}}
										profile={{
											label: 'AM',
											width: 40,
											height: 40,
											backgroundColor: item.color,
											color: 'white',
											labelFontSize: 12
										}}
										title={{
											text: '123456789123456',
											fontSize: 14,
											maxWidth: 100,
											margin: '0px 0px 0px 14px'
										}}
										desc={{
											text: 'Hey there! how are you',
											fontSize: 13,
											maxWidth: 100,
											margin: '0px 0px 0px 14px'
										}}
									/>
								</div>
							);
						})
					}

					{/* <LabelComponent
						fontRegular
						text='No conversations to show'
						alignCenter
						fontSize={16}
						margin="50px 0px 0px 0px"
					/> */}

				</div>
				<DrawerComponent isOpen={addFriendDrawer.isOpen}>
					<button
						onClick={() => {
							this.setState({
								addFriendDrawer: {
									isOpen: false
								}
							});
						}}
					>
						{
							'addFriendDrawer'
						}
					</button>
				</DrawerComponent>
				<DrawerComponent isOpen={startConversationDrawer.isOpen}>
					<button
						onClick={() => {
							this.setState({
								startConversationDrawer: {
									isOpen: false
								}
							});
						}}
					>
						{
							'startConversationDrawer'
						}
					</button>
				</DrawerComponent>
			</div>
		);
	}

	render () {
		return (
			<div className='chat-wrapper'>
				{
					this.renderActionsContainer()
				}
				<div className='chat-container'>
					<header className='header-container'>

					</header>
					<section className='chat-content'>
					</section>
					<footer className='footer-container'>

					</footer>
				</div>
			</div>
		);
	}
}
