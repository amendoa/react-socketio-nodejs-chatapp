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
import * as messageActions from 'redux/actions/message';

class ChatWrapper extends Component {
	constructor (props) {
		super(props);
		this.conversationContainer = React.createRef();

		this.state = {
			message: ''
		};
	}

	componentDidUpdate () {
		const {
			current
		} = this.conversationContainer;


		if (current) {
			current.scrollTop = current.scrollHeight;
		}
	}

	setConversationIsRead = () => {
		const {
			conversationData,
			conversationActions
		} = this.props;

		const {
			resetConversationUnreadMessages
		} = conversationActions;

		const {
			currentUserIdConversation,
			result: conversations
		} = conversationData;

		const currentConversation = conversations.find(item => String(item.userId._id) === String(currentUserIdConversation));

		const {
			userId,
			unreadMessages
		} = currentConversation;

		if (unreadMessages > 0) {
			resetConversationUnreadMessages({
				user: userId
			});
		}
	}

	handleSendMessage = (message) => {
		if (message) {
			const {
				conversationData,
				messageActions
			} = this.props;

			const {
				currentUserIdConversation
			} = conversationData;

			const params = {
				body: {
					message,
					receiverId: currentUserIdConversation
				}
			};

			messageActions.postMessage(params);

			this.setState({
				message: ''
			});
		}
	}

	renderChatContainer = () => {
		const {
			conversationData,
			messageData
		} = this.props;

		const {
			getMessages
		} = messageData;

		const {
			currentUserIdConversation,
			result: conversations
		} = conversationData;

		const {
			message
		} = this.state;

		if (!currentUserIdConversation) {
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

		const currentConversation = conversations.find(item => String(item.userId._id) === String(currentUserIdConversation));

		const {
			nickname,
			profileColor
		} = currentConversation.userId;

		return (
			<div
				className='chat-content'
			>
				<header className='header-container'>
					<UserInfoComponent
						isFetching={false}
						sketchDark
						profile={{
							label: nickname,
							width: 40,
							height: 40,
							backgroundColor: profileColor,
							color: 'white',
							labelFontSize: 14
						}}
						title={{
							text: nickname,
							fontSize: 13,
							margin: '0px 0px 0px 14px'
						}}
						desc={{
							text: '',
							fontSize: 13,
							maxWidth: 100,
							margin: '0px 0px 0px 14px'
						}}
					/>
				</header>
				<section
					ref={this.conversationContainer}
					className='conversation-container'
				>
					<MessageListContainer
						isFetching={getMessages.isFetching}
						items={currentConversation.messages}
						onMouseOver={this.setConversationIsRead}
						onFocus={this.setConversationIsRead}
					/>
				</section>
				<footer className='footer-container'>
					<ContentEditableComponent
						onEnter={this.handleSendMessage}
						onFocus={this.setConversationIsRead}
						value={message}
					/>
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
		conversationData: state.conversation,
		messageData: state.message
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		conversationActions: bindActionCreators(conversationActions, dispatch),
		messageActions: bindActionCreators(messageActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatWrapper);
