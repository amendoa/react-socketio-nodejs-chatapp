import React, {
	Component
} from 'react';

import {
	ButtonComponent,
	LabelComponent
} from 'shared/components';

import {
	AuthContainer
} from 'shared/containers';

import {
	SignUpFormContainer
} from 'entries/sign-up/containers';

import constants from 'modules/constants';

export default class SignUpEntry extends Component {
	handleClickSignInButton = () => {
		const {
			history
		} = this.props;

		history.push('/signin');
	}

	render () {
		return (
			<AuthContainer
				title={constants.LABELS.AUTH.SIGNUP}
				formContainer={(
					<SignUpFormContainer />
				)}
				footerInfo={(
					<LabelComponent
						text={constants.LABELS.AUTH.ALREADY_HAVE_ACCOUNT}
					/>
				)}
				footerInfoLink={(
					<ButtonComponent
						text={constants.LABELS.AUTH.SIGNIN}
						link
						width={80}
						onClick={this.handleClickSignInButton}
					/>
				)}
			/>
		);
	}
}
