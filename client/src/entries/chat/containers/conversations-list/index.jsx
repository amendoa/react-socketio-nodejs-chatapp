import React, {
	Component
} from 'react';

import {
	LabelComponent
} from 'shared/components';

import {
	ConversationCardComponent,
	ConversationCardSketch
} from 'entries/chat/components';

export default class ConversationsList extends Component {
	renderConversationsContent = () => {
		const {
			isFetching,
			items,
			emptyMessage,
			onClickItem
		} = this.props;

		if (isFetching) {
			return (
				<div>
					<ConversationCardSketch />
					<ConversationCardSketch />
					<ConversationCardSketch />
				</div>
			);
		}

		if (items.length <= 0) {
			return (
				<LabelComponent
					fontRegular
					text={emptyMessage}
					alignCenter
					fontSize={16}
					margin="50px 0px 0px 0px"
				/>
			);
		}

		return (
			<div>
				{
					items.map((item, key) => {
						const {
							nickname,
							unreadMessages,
							profileColor,
							desc,
							rightLabel
						} = item;

						return (
							<ConversationCardComponent
								key={key}
								onClick={() => {
									onClickItem(item);
								}}
								profile={{
									label: nickname,
									width: 40,
									height: 40,
									backgroundColor: profileColor,
									color: 'white',
									labelFontSize: 12
								}}
								title={{
									text: nickname,
									fontSize: 13,
									maxWidth: 76,
									margin: '0px 0px 0px 14px'
								}}
								desc={{
									text: desc,
									fontSize: 13,
									maxWidth: 76,
									margin: '0px 0px 0px 14px'
								}}
								rightLabel={rightLabel}
								tagInfo={unreadMessages}
							/>
						);
					})
				}
			</div>
		);
	}

	render () {
		return (
			<div className='conversations-list-container'>
				{
					this.renderConversationsContent()
				}
			</div>
		);
	}
}
