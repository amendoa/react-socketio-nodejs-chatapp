import React, {
	Component
} from 'react';

import {
	ButtonComponent,
	InputComponent
} from 'shared/components';

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
			<section className="sign-up-wrapper">
				<div className="form-container">
					<h1
						className="title"
					>
						{
							constants.LABELS.AUTH.SIGNUP
						}
					</h1>

					<div
						className="inputs-container"
					>
						<InputComponent
							placeholder={constants.LABELS.AUTH.USERNAME}
							marginTop={7}
							marginBottom={7}
							width={280}
							type="text"
						/>
						<InputComponent
							placeholder={constants.LABELS.AUTH.PASSWORD}
							marginTop={7}
							marginBottom={7}
							width={280}
							type="password"
						/>
						<InputComponent
							placeholder={constants.LABELS.AUTH.CONFIRM_PASSWORD}
							marginTop={7}
							marginBottom={7}
							width={280}
							type="password"
						/>
						<ButtonComponent
							text={constants.LABELS.AUTH.SIGNUP}
							primary
							marginTop={35}
							width={280}
						/>
					</div>
					<div className="info-container">
						<span>
							{
								constants.LABELS.AUTH.ALREADY_HAVE_ACCOUNT
							}
						</span>
						<ButtonComponent
							text={constants.LABELS.AUTH.SIGNIN}
							link
							width={80}
							onClick={this.handleClickSignInButton}
						/>
					</div>
				</div>
			</section>
		);
	}
}
