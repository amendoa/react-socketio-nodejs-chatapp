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
					onClickItem={() => { console.log('onClickItem'); }}
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
		contactActions: bindActionCreators(contactActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StartConversationDrawer);
