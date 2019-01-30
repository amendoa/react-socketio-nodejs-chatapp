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

export default class HomeEntry extends Component {
	render () {
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
							fontBold
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
									/>
								);
							}}
						/>
					</div>
					<div className='conversations-container'>

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
