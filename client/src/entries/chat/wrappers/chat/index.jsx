import React, {
	Component
} from 'react';

import {
	ContentEditableComponent
} from 'shared/components';

import {
	UserInfoComponent
} from 'entries/chat/components';

export default class ChatWrapper extends Component {
	render () {
		return (
			<div className='chat-container'>
				<header className='header-container'>
					<UserInfoComponent
						isFetching={false}
						sketchDark
						profile={{
							label: 'AM',
							width: 40,
							height: 40,
							backgroundColor: '#1863ff',
							color: 'white',
							labelFontSize: 14
						}}
						title={{
							text: 'Amendowins',
							fontSize: 13,
							margin: '0px 0px 0px 14px'
						}}
						desc={{
							text: 'typing...',
							fontSize: 13,
							maxWidth: 100,
							margin: '0px 0px 0px 14px'
						}}
					/>
				</header>
				<section className='chat-content'>
				</section>
				<footer className='footer-container'>
					<ContentEditableComponent />
				</footer>
			</div>
		);
	}
}
