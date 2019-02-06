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

import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from 'redux/actions/contact';
import constants from 'modules/constants';

import {
	removeToken
} from 'modules/utils';

const conversations = [
	{
		color: '#1461ff'
	},
	{
		color: '#dbcc86'
	},
	{
		color: '#d89389'
	},
	{
		color: '#1461ff'
	},
	{
		color: '#dbcc86'
	},
	{
		color: '#d89389'
	},
	{
		color: '#1461ff'
	},
	{
		color: '#dbcc86'
	},
	{
		color: '#d89389'
	},
	{
		color: '#1461ff'
	},
	{
		color: '#dbcc86'
	},
	{
		color: '#d89389'
	}
];

class ActionsWrapper extends Component {
	constructor (props) {
		super(props);

		this.state = {
			addContactDrawer: {
				isOpen: false
			},
			startConversationDrawer: {
				isOpen: false
			}
		};
	}

	handleOpenAddContact = () => {
		const {
			contactActions
		} = this.props;

		contactActions.resetAddContact();

		this.setState({
			addContactDrawer: {
				isOpen: true
			}
		});
	}

	handleLogout = () => {
		const {
			dispatch
		} = this.props;
		removeToken();
		dispatch(push('signin'));
	}

	render () {
		const {
			addContactDrawer,
			startConversationDrawer
		} = this.state;

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
								onClick={() => {
									this.setState({
										startConversationDrawer: {
											isOpen: true
										}
									});
								}}
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
					isOpen={addContactDrawer.isOpen}
					title={constants.LABELS.CHAT.ADD_CONTACT}
					handleGoBack={() => {
						this.setState({
							addContactDrawer: {
								isOpen: false
							}
						});
					}}
				>
					<AddContactDrawer />
				</DrawerComponent>
				<DrawerComponent
					isOpen={startConversationDrawer.isOpen}
					title={constants.LABELS.CHAT.NEW_CONVERSATION}
					handleGoBack={() => {
						this.setState({
							startConversationDrawer: {
								isOpen: false
							}
						});
					}}
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
		dispatch
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ActionsWrapper);
