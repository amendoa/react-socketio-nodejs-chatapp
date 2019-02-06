import React, {
	Component
} from 'react';

import {
	ConversationsList
} from 'entries/chat/containers';

import {
	InputComponent,
	IconComponent
} from 'shared/components';

import constants from 'modules/constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from 'redux/actions/contact';

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

class StartConversationDrawer extends Component {
	componentDidMount() {
		const {
			contactActions
		} = this.props;

		contactActions.resetGetContacts();
		contactActions.getContacts();
	}

	render () {
		const {
			contactData
		} = this.props;

		const {
			getContacts
		} = contactData;

		// getContacts.result

		return (
			<div className='start-conversation-drawer-wrapper'>
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
					items={getContacts.result}
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
