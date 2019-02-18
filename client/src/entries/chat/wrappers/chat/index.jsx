import React, {
	Component
} from 'react';

import {
	ContentEditableComponent,
	IconComponent,
	LabelComponent,
	ButtonComponent
} from 'shared/components';

import {
	UserInfoComponent
} from 'entries/chat/components';

import {
	MessageListContainer
} from 'entries/chat/containers';

import constants from 'modules/constants';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { bindActionCreators } from 'redux';
import * as conversationActions from 'redux/actions/conversation';
import * as messageActions from 'redux/actions/message';

class ChatWrapper extends Component {
	constructor (props) {
		super(props);
		this.conversationContainer = React.createRef();
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
			currentPartnerIdConversation,
			result: conversations
		} = conversationData;

		const currentConversation = conversations.find(item => String(item.partnerId._id) === String(currentPartnerIdConversation));

		const {
			partnerId,
			unreadMessages
		} = currentConversation;

		if (unreadMessages > 0) {
			resetConversationUnreadMessages({
				partner: partnerId
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
				currentPartnerIdConversation
			} = conversationData;

			const params = {
				body: {
					message,
					receiverId: currentPartnerIdConversation
				}
			};

			messageActions.postMessage(params);
		}
	}

	handleDeleteMessage = (messageId) => {
		const {
			messageActions,
			conversationData
		} = this.props;

		const {
			currentPartnerIdConversation: partnerId
		} = conversationData;


		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='confirm-popup'>
						<LabelComponent
							fontSemiBold
							text={constants.LABELS.CHAT.DELETE_MESSAGE_CONFIRM}
							fontSize={30}
							alignCenter
							margin="0px 0px 25px 0px"
						/>
						<div className='buttons-container'>
							<ButtonComponent
								type="button"
								defaultButton
								small
								outline
								text={constants.LABELS.MAIN.NO}
								margin="10px"
								width={100}
								onClick={onClose}
							/>
							<ButtonComponent
								type="button"
								defaultButton
								small
								outline
								text={constants.LABELS.MAIN.YES}
								margin="10px"
								width={100}
								onClick={() => {
									messageActions.deleteMessage({
										messageId,
										partnerId
									});
									onClose();
								}}
							/>
						</div>
					</div>
				);
			}
		});
	}

	getCurrentConversationMessages = (messages) => {
		const {
			messageData
		} = this.props;

		const {
			deleteMessage
		} = messageData;

		return messages.map(message => {
			const newItem = message;
			newItem.isFetchingAction = (
				deleteMessage.isFetching
				&& String(deleteMessage.currentMessageIdIsDeleting) === String(message._id)
			);
			return message;
		});
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
			currentPartnerIdConversation,
			result: conversations
		} = conversationData;

		if (!currentPartnerIdConversation) {
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

		const currentConversation = conversations.find(item => String(item.partnerId._id) === String(currentPartnerIdConversation));

		const {
			nickname,
			profileColor
		} = currentConversation.partnerId;

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
						items={this.getCurrentConversationMessages(currentConversation.messages)}
						onMouseOver={this.setConversationIsRead}
						onFocus={this.setConversationIsRead}
						handleDeleteMessage={this.handleDeleteMessage}
					/>
				</section>
				<footer className='footer-container'>
					<ContentEditableComponent
						onEnter={this.handleSendMessage}
						onFocus={this.setConversationIsRead}
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
