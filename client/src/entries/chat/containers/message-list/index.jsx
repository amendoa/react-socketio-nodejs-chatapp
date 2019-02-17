import React, {
	Component
} from 'react';

import {
	MessageComponent,
	MessageSketch,
	TimeTagComponent
} from 'entries/chat/components';

import moment from 'moment';
import _ from 'lodash';

export default class MessageListContainer extends Component {
	getItems = () => {
		const {
			items
		} = this.props;

		const messages = [];

		const aggregatedItems = _.groupBy(items, (item) => {
			return moment(item.dateTime).utc().startOf('day').format();
		});

		_.mapKeys(aggregatedItems, (value, key) => {
			const item = {
				items: value
			};

			const diff = moment(new Date()).diff(moment(key), 'days');

			if (diff <= 6) {
				if (diff === 0) {
					item.timeTag = 'today';
				} else if (diff === 1) {
					item.timeTag = 'yesterday';
				} else {
					item.timeTag = moment(key).format('dddd');
				}
			} else {
				item.timeTag = moment(key).format('DD/MM/YYYY');
			}

			messages.push(item);
		});

		return messages;
	}

	render () {
		const {
			isFetching,
			onMouseOver,
			onFocus,
			handleDeleteMessage
		} = this.props;

		const messages = this.getItems();

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
				onMouseOver={onMouseOver}
				onFocus={onFocus}
			>
				{
					messages.map((message, key) => {
						const {
							timeTag,
							items
						} = message;

						const components = [];

						components.push(
							<TimeTagComponent
								key={`time-tag${key}`}
								text={timeTag}
							/>
						);

						items.forEach((item, key) => {
							const {
								message,
								dateTime,
								currentUserIsSender,
								_id,
								isFetchingAction
							} = item;

							components.push(
								<MessageComponent
									key={`message${key}`}
									right={currentUserIsSender}
									left={!currentUserIsSender}
									text={message}
									time={moment(dateTime).format('HH:mm')}
									handleDelete={() => {
										handleDeleteMessage(_id);
									}}
									isFetchingAction={isFetchingAction}
								/>
							);
						});

						return (
							components
						);
					})
				}
			</div>
		);
	}
}
