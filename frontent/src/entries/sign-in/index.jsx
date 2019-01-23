import React, {
	Component
} from 'react';

import {
	ButtonComponent,
	InputComponent
} from 'shared/components';

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
			<section className="sign-up-wrapper">
				<div className="form-container">
					<h1
						className="title"
					>
						{
							constants.LABELS.AUTH.SIGNIN
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
						<ButtonComponent
							text={constants.LABELS.AUTH.SIGNIN}
							primary
							marginTop={35}
							width={280}
						/>
					</div>
					<div className="info-container">
						<span>
							{
								constants.LABELS.AUTH.DONT_HAVE_AN_ACCOUNT
							}
						</span>
						<ButtonComponent
							text={constants.LABELS.AUTH.SIGNUP}
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
