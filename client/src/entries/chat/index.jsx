import React, {
	Component
} from 'react';

import {
	ActionsWrapper,
	ChatWrapper
} from 'entries/chat/wrappers';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as socketActions from 'redux/actions/socket';

class HomeEntry extends Component {
	componentDidMount () {
		const {
			socketActions
		} = this.props;

		socketActions.startChannel();
	}

	render () {
		return (
			<div className='chat-wrapper'>
				<ActionsWrapper />
				<ChatWrapper />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		socketActions: bindActionCreators(socketActions, dispatch)
	};
};

export default connect(
	null,
	mapDispatchToProps
)(HomeEntry);
