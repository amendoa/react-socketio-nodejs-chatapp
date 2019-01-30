import React, {
	Component
} from 'react';

import {
	ProfilePictureComponent,
	ButtonComponent,
	IconComponent,
	LabelComponent,
	InputComponent
} from 'shared/components';

import {
	UserCardContainer
} from 'entries/chat/containers';

export default class HomeEntry extends Component {
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
			<div className='chat-wrapper'>
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
									onClick={() => {}}
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
									onClick={() => {}}
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
										<div className='card'>
											<UserCardContainer
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
											<LabelComponent
												fontRegular
												text='Yesterday'
												fontSize={13}
												margin="0px 0px 0px 0px"
											/>
										</div>
										<span className='card-division' />
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
				</div>
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
