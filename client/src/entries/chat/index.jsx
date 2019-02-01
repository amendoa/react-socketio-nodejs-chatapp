import React, {
	Component
} from 'react';

import {
	ActionsContainer,
	ChatContainer
} from 'entries/chat/containers';

export default class HomeEntry extends Component {
	render () {
		return (
			<div className='chat-wrapper'>
				<ActionsContainer />
				<ChatContainer />
			</div>
		);
	}
}
