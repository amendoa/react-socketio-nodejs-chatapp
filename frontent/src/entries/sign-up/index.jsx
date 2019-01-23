import React, {
	Component
} from 'react';

import {
	ButtonComponent
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
					<span>
						{
							constants.LABELS.AUTH.ALREADY_HAVE_ACCOUNT
						}
					</span>
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
