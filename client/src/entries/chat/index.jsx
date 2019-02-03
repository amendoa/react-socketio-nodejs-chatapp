import React, {
	Component
} from 'react';

import {
	ActionsWrapper,
	ChatWrapper
} from 'entries/chat/wrappers';

export default class HomeEntry extends Component {
	render () {
		return (
			<div className='chat-wrapper'>
				<ActionsWrapper />
				<ChatWrapper />
			</div>
		);
	}
}
