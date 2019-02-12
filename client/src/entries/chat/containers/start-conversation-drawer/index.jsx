import React, {
	Component
} from 'react';

import {
	ConversationsList
} from 'entries/chat/containers';

import {
	InputSearchComponent
} from 'entries/chat/components';

import constants from 'modules/constants';
import { connect } from 'react-redux';
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
			user: item
		});

		drawerActions.closeDrawer(drawerName);
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

		const items = searchParam(getContacts.result, contactsSearch);

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
