import React, {
	Component
} from 'react';

import {
	IconComponent,
	ButtonComponent,
	DrawerComponent,
	DropDownMenuComponent
} from 'shared/components';

import {
	ConversationsList,
	AddContactDrawer,
	StartConversationDrawer
} from 'entries/chat/containers';

import {
	UserInfoComponent,
	InputSearchComponent
} from 'entries/chat/components';

import {
	logout,
	searchParam,
	getUser
} from 'modules/utils';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import * as contactActions from 'redux/actions/contact';
import * as drawerActions from 'redux/actions/drawer';
import * as conversationActions from 'redux/actions/conversation';
import constants from 'modules/constants';

class ActionsWrapper extends Component {
	constructor (props) {
		super(props);
		this.state = {
			conversationsSearch: {
				nickname: ''
			}
		};
	}

	componentDidMount () {
		const {
			conversationActions
		} = this.props;

		conversationActions.getConversations();
	}

	handleOpenAddContact = () => {
		const {
			contactActions
		} = this.props;

		contactActions.resetAddContact();
		this.openDrawer('addContact');
	}

	handleOpenNewConversation = () => {
		this.openDrawer('newConversation');
	}

	openDrawer = (drawerName) => {
		const {
			contactActions,
			drawerActions
		} = this.props;

		contactActions.resetAddContact();
		drawerActions.openDrawer(drawerName);
	}

	handleLogout = () => {
		logout();
	}

	handleChangeSearch = (value) => {
		this.setState({
			conversationsSearch: {
				nickname: value
			}
		});
	}

	conversationListToComponentData = (conversations) => {
		return conversations.map((item) => {
			const {
				nickname,
				profileColor,
				_id
			} = item.userId;
			const lastMessage = item.messages[item.messages.length - 1];

			return {
				nickname,
				profileColor,
				_id,
				desc: lastMessage ? lastMessage.message : '',
				rightLabel: lastMessage ? moment(lastMessage.dateTime).fromNow(true) : ''
			};
		});
	}

	handleClickConversationItem = (item) => {
		const {
			conversationActions
		} = this.props;

		conversationActions.setCurrentConversation({
			user: item
		});
	}

	render () {
		const currentUser = getUser() || {};

		const {
			conversationsSearch
		} = this.state;

		const {
			conversationData
		} = this.props;

		const {
			isFetching,
			result
		} = conversationData;

		const {
			profileColor,
			nickname
		} = currentUser;

		const conversations = this.conversationListToComponentData(result);
		const items = searchParam(conversations, conversationsSearch);

		return (
			<div className='actions-wrapper'>
				<header className='header-container'>
					<div className='header-content'>
						<UserInfoComponent
							isFetching={false}
							column
							profile={{
								label: nickname,
								width: 60,
								height: 60,
								backgroundColor: profileColor,
								color: 'white',
								labelFontSize: 16
							}}
							title={{
								text: nickname,
								fontSize: 16,
								margin: '10px 0px 0px 0px'
							}}
						/>
						<div>
							<ButtonComponent
								type='button'
								width={26}
								height={26}
								link
								onClick={this.handleOpenAddContact}
							>
								<IconComponent
									fill="#555657"
									icon="account-plus"
									width={26}
									height={26}
								/>
							</ButtonComponent>
							<ButtonComponent
								type='button'
								width={26}
								height={26}
								margin="0px 0px 0px 20px"
								link
								onClick={this.handleOpenNewConversation}
							>
								<IconComponent
									fill="#555657"
									icon="message-text"
									width={26}
									height={26}
								/>
							</ButtonComponent>
							<DropDownMenuComponent
								options={[
									{
										text: constants.LABELS.CHAT.LOGOUT,
										event: this.handleLogout
									}
								]}
							/>
						</div>
					</div>
				</header>
				<div>
					<InputSearchComponent
						handleChange={this.handleChangeSearch}
					/>
				</div>
				<ConversationsList
					items={items}
					isFetching={isFetching}
					emptyMessage={constants.LABELS.CHAT.NO_CONVERSATIONS_TO_SHOW}
					onClickItem={this.handleClickConversationItem}
				/>
				<DrawerComponent
					drawerName='addContact'
					title={constants.LABELS.CHAT.ADD_CONTACT}
				>
					<AddContactDrawer />
				</DrawerComponent>
				<DrawerComponent
					drawerName='newConversation'
					title={constants.LABELS.CHAT.NEW_CONVERSATION}
				>
					<StartConversationDrawer
						drawerName='newConversation'
					/>
				</DrawerComponent>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contactData: state.contact,
		conversationData: state.conversation
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		contactActions: bindActionCreators(contactActions, dispatch),
		conversationActions: bindActionCreators(conversationActions, dispatch),
		drawerActions: bindActionCreators(drawerActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ActionsWrapper);
