import React, {
	Component
} from 'react';

import {
	MessageComponent,
	MessageSketch,
	TimeTagComponent
} from 'entries/chat/components';

import moment from 'moment';

export default class MessageListContainer extends Component {
	render () {
		const {
			isFetching,
			items
		} = this.props;

		if (isFetching) {
			return (
				<div
					className='message-list'
				>
					<MessageSketch
						left
					/>
					<MessageSketch
						right
					/>
				</div>
			);
		}

		return (
			<div
				className='message-list'
			>
				{
					items.map((item, key) => {
						const {
							message,
							dateTime,
							currentUserIsSender
						} = item;

						// if (item.type === 1) {
						// 	return (
						// 		<MessageComponent
						// 			key={key}
						// 			left
						// 			text='Hey there! how are you?'
						// 			time='12:23'
						// 		/>
						// 	);
						// }
						//
						// if (item.type === 3) {
						// 	return (
						// 		<TimeTagComponent
						// 			key={key}
						// 			text='Today'
						// 		/>
						// 	);
						// }

						return (
							<MessageComponent
								key={key}
								right={currentUserIsSender}
								left={!currentUserIsSender}
								text={message}
								time={moment(dateTime).format('HH:mm')}
							/>
						);
					})
				}
			</div>
		);
	}
}
