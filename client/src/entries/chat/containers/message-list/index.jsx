import React, {
	Component
} from 'react';

import {
	MessageComponent,
	MessageSketch,
	TimeTagComponent
} from 'entries/chat/components';

export default class MessageListContainer extends Component {
	render () {
		const {
			isFetching
		} = this.props;

		const teste = [
			{
				type: 3
			},
			{
				type: 1
			},
			{
				type: 1
			},
			{
				type: 1
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 1
			},
			{
				type: 1
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 3
			},
			{
				type: 1
			},
			{
				type: 2
			},
			{
				type: 1
			},
			{
				type: 2
			},
			{
				type: 1
			},
			{
				type: 3
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 1
			},
			{
				type: 2
			},
			{
				type: 2
			},
			{
				type: 1
			},
			{
				type: 2
			},
			{
				type: 1
			},
			{
				type: 1
			},
			{
				type: 1
			},
			{
				type: 2
			},
		];

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
					teste.map((item, key) => {
						if (item.type === 1) {
							return (
								<MessageComponent
									key={key}
									left
									text='Hey there! how are you?'
									time='12:23'
								/>
							);
						}

						if (item.type === 3) {
							return (
								<TimeTagComponent
									key={key}
									text='Today'
								/>
							);
						}

						return (
							<MessageComponent
								key={key}
								right
								text='Hey there! how are you you you you?'
								time='12:23'
							/>
						);
					})
				}
			</div>
		);
	}
}
