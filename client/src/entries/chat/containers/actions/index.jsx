import React, {
	Component
} from 'react';

import {
	ProfilePictureComponent,
	IconComponent,
	LabelComponent,
	InputComponent,
	ButtonComponent,
	DrawerComponent,
	FlashMessageComponent
} from 'shared/components';

import {
	ConversationCardComponent
} from 'entries/chat/components';

import constants from 'modules/constants';

export default class ActionsContainer extends Component {
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

	renderStartConversationDrawer = () => {
		const {
			startConversationDrawer
		} = this.state;

		return (
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
				<div>
					<ConversationCardComponent
						onClick={() => {
							console.log('teste');
						}}
						profile={{
							label: 'AM',
							width: 40,
							height: 40,
							backgroundColor: '#1461ff',
							color: 'white',
							labelFontSize: 12
						}}
						title={{
							text: '123456789123456',
							fontSize: 14,
							margin: '0px 0px 0px 14px'
						}}
					/>
					<ConversationCardComponent
						onClick={() => {
							console.log('teste');
						}}
						profile={{
							label: 'AM',
							width: 40,
							height: 40,
							backgroundColor: '#dbcc86',
							color: 'white',
							labelFontSize: 12
						}}
						title={{
							text: '123456789123456',
							fontSize: 14,
							margin: '0px 0px 0px 14px'
						}}
					/>
					<ConversationCardComponent
						onClick={() => {
							console.log('teste');
						}}
						profile={{
							label: 'AM',
							width: 40,
							height: 40,
							backgroundColor: '#d89389',
							color: 'white',
							labelFontSize: 12
						}}
						title={{
							text: '123456789123456',
							fontSize: 14,
							margin: '0px 0px 0px 14px'
						}}
					/>

				</div>

				{/* <LabelComponent
					fontRegular
					text={constants.LABELS.CHAT.NO_CONTACTS_TO_SHOW}
					alignCenter
					fontSize={16}
					margin="50px 0px 0px 0px"
				/> */}

			</DrawerComponent>
		);
	}

	renderAddFriendDrawer = () => {
		const {
			addFriendDrawer
		} = this.state;

		return (
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
				className='add-friend-drawer-wrapper'
			>

				<div
					className='form-container'
				>
					{/* <FlashMessageComponent
						width='100%'
						message='You already added this user'
						margin='0px 0px 15px 0px'
					/> */}
					<InputComponent
						type='text'
						autoComplete='off'
						placeholder={constants.LABELS.AUTH.NICKNAME}
						onChange={() => {}}
						onFocus={() => {}}
						onBlur={() => {}}
						maxLength={15}
						defaultButton
						margin='0px 0px 15px 0px'
					/>
					<ButtonComponent
						type="button"
						primary
						text={constants.LABELS.CHAT.ADD}
						width='100%'
					/>
				</div>
			</DrawerComponent>
		);
	}

	render () {
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
				<div className='conversations-container'>
					{
						conversations.map((item, key) => {
							return (
								<ConversationCardComponent
									key={key}
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
									rightLabel='Yesterday'
								/>
							);
						})
					}

					{/* <LabelComponent
						fontRegular
						text={constants.LABELS.CHAT.NO_CONVERSATIONS_TO_SHOW}
						alignCenter
						fontSize={16}
						margin="50px 0px 0px 0px"
					/> */}

				</div>
				{
					this.renderAddFriendDrawer()
				}
				{
					this.renderStartConversationDrawer()
				}
			</div>
		);
	}
}
