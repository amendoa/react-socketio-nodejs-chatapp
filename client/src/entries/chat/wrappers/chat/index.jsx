import React, {
	Component
} from 'react';

import {
	ContentEditableComponent,
	IconComponent
} from 'shared/components';

import {
	UserInfoComponent
} from 'entries/chat/components';

import {
	MessageListContainer
} from 'entries/chat/containers';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as conversationActions from 'redux/actions/conversation';

class ChatWrapper extends Component {
	renderChatContainer = () => {
		const {
			conversationData
		} = this.props;

		const {
			currentConversation
		} = conversationData;

		if (!currentConversation) {
			return (
				<div
					className='empty-message-container'
				>
					<IconComponent
						icon="chat-emoji"
						width={200}
						height={200}
						margin='0px 0px 25px 20px'
					/>
				</div>
			);
		}

		return (
			<div
				className='chat-content'
			>
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
				<section className='conversation-container'>
					<MessageListContainer
						isFetching={false}
					/>
				</section>
				<footer className='footer-container'>
					<ContentEditableComponent />
				</footer>
			</div>
		);
	}

	render () {
		return (
			<div className='chat-container'>
				{
					this.renderChatContainer()
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		conversationData: state.conversation
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		conversationActions: bindActionCreators(conversationActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatWrapper);
