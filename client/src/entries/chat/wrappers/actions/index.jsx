import React, {
	Component
} from 'react';

import {
	IconComponent,
	InputComponent,
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
	UserInfoComponent
} from 'entries/chat/components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from 'redux/actions/contact';
import * as drawerActions from 'redux/actions/drawer';
import constants from 'modules/constants';

import {
	logout
} from 'modules/utils';

const conversations = [
	{
		profileColor: '#1461ff',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#dbcc86',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#d89389',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#1461ff',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#dbcc86',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#d89389',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#1461ff',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#dbcc86',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#d89389',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#1461ff',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#dbcc86',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	},
	{
		profileColor: '#d89389',
		nickname: 'teste',
		desc: 'Hey there! how are you?',
		rightLabel: 'Yesterday'
	}
];

class ActionsWrapper extends Component {
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

	render () {
		return (
			<div className='actions-wrapper'>
				<header className='header-container'>
					<div className='header-content'>
						<UserInfoComponent
							isFetching={false}
							column
							profile={{
								label: 'AM',
								width: 60,
								height: 60,
								backgroundColor: '#1863ff',
								color: 'white',
								labelFontSize: 16
							}}
							title={{
								text: 'Amendowins',
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
					<InputComponent
						type='text'
						autoComplete='off'
						onChange={() => {}}
						onFocus={() => {}}
						onBlur={() => {}}
						maxLength={15}
						search
						iconComponent={() => {
							return (
								<IconComponent
									fill="#555657"
									icon="search"
									width={28}
									height={28}
									margin="0px 0px 0px 2px"
								/>
							);
						}}
					/>
				</div>
				<ConversationsList
					items={conversations}
					isFetching={false}
					emptyMessage={constants.LABELS.CHAT.NO_CONVERSATIONS_TO_SHOW}
					onClickItem={() => { console.log('onClickItem'); }}
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
					<StartConversationDrawer />
				</DrawerComponent>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contactData: state.contact
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		contactActions: bindActionCreators(contactActions, dispatch),
		drawerActions: bindActionCreators(drawerActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ActionsWrapper);
