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
	SignInFormContainer
} from 'entries/sign-in/containers';

import constants from 'modules/constants';

export default class SignInEntry extends Component {
	handleClickSignInButton = () => {
		const {
			history
		} = this.props;

		history.push('/signup');
	}

	render () {
		return (
			<AuthContainer
				title={constants.LABELS.AUTH.SIGNIN}
				formContainer={(
					<SignInFormContainer />
				)}
				footerInfo={(
					<LabelComponent
						text={constants.LABELS.AUTH.DONT_HAVE_AN_ACCOUNT}
					/>
				)}
				footerInfoLink={(
					<ButtonComponent
						text={constants.LABELS.AUTH.SIGNUP}
						link
						width={80}
						onClick={this.handleClickSignInButton}
					/>
				)}
			/>
		);
	}
}
