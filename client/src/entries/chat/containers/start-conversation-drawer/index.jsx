import React, {
	Component
} from 'react';

import {
	ConversationsList
} from 'entries/chat/containers';

import {
	InputSearchComponent
} from 'entries/chat/components';

import {
	LabelComponent,
	ButtonComponent
} from 'shared/components';

import constants from 'modules/constants';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { bindActionCreators } from 'redux';
import * as contactActions from 'redux/actions/contact';
import * as drawerActions from 'redux/actions/drawer';
import * as conversationActions from 'redux/actions/conversation';

import {
	searchParam
} from 'modules/utils';

class StartConversationDrawer extends Component {
	constructor (props) {
		super(props);

		this.state = {
			contactsSearch: {
				nickname: ''
			}
		};
	}

	componentDidMount() {
		const {
			contactActions
		} = this.props;

		contactActions.resetGetContacts();
		contactActions.getContacts();
	}

	handleChangeSearch = (value) => {
		this.setState({
			contactsSearch: {
				nickname: value
			}
		});
	}

	handleClickConversationItem = (item) => {
		const {
			drawerActions,
			drawerName,
			conversationActions
		} = this.props;

		conversationActions.setCurrentConversation({
			partner: item
		});

		drawerActions.closeDrawer(drawerName);
	}

	handleDeleteContact = (item) => {
		const {
			contactActions
		} = this.props;

		const {
			_id
		} = item;

		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='confirm-popup'>
						<LabelComponent
							fontSemiBold
							text={constants.LABELS.CONTACT.DELETE_CONTACT_CONFIRM}
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
									onClose();
									contactActions.deleteContact({
										contactId: _id
									});
								}}
							/>
						</div>
					</div>
				);
			}
		});
	}

	getContactsData = (contacts) => {
		const {
			contactData
		} = this.props;

		const {
			deleteContact
		} = contactData;

		return contacts.map(item => {
			const {
				nickname,
				profileColor,
				_id
			} = item;

			return {
				nickname,
				profileColor,
				_id,
				isFetchingAction: (
					deleteContact.isFetching
					&& String(deleteContact.currentContactIdIsDeleting) === String(_id)
				)
			};
		});
	}

	render () {
		const {
			contactData
		} = this.props;

		const {
			contactsSearch
		} = this.state;

		const {
			getContacts
		} = contactData;

		const items = searchParam(this.getContactsData(getContacts.result), contactsSearch);

		return (
			<div className='start-conversation-drawer-wrapper'>
				<div>
					<InputSearchComponent
						handleChange={this.handleChangeSearch}
					/>
				</div>
				<ConversationsList
					items={items}
					isFetching={getContacts.isFetching}
					emptyMessage={constants.LABELS.CHAT.NO_CONTACTS_TO_SHOW}
					onClickItem={this.handleClickConversationItem}
					onDeleteItem={this.handleDeleteContact}
					deleteDropDownMessage={constants.LABELS.CONTACT.DELETE_CONTACT}
				/>
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
		conversationActions: bindActionCreators(conversationActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StartConversationDrawer);
