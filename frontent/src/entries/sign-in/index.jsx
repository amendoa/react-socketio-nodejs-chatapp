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
					<span>
						{
							constants.LABELS.AUTH.DONT_HAVE_AN_ACCOUNT
						}
					</span>
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
