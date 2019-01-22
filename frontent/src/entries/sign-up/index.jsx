import React, {
	Component
} from 'react';

import {
	ButtonComponent,
	InputTextComponent
} from 'shared/components';

export default class SignUpEntry extends Component {
	render () {
		return (
			<div className="sign-up-wrapper">
				<div className="form-container">
					<h1
						className="title"
					>
						{
							'Sign Up'
						}
					</h1>

					<div
						className="inputs-container"
					>
						<InputTextComponent
							placeholder="Username"
							width={300}
						/>
						<InputTextComponent
							placeholder="Password"
							width={300}
						/>
						<InputTextComponent
							placeholder="Confirm password"
							width={300}
						/>

						<ButtonComponent
							text="Sign Up"
							primary
							width={300}
						/>
					</div>

					<div className="info-container">
						<span>
							{
								'Already have an account?'
							}
						</span>
						<ButtonComponent
							text="Sign In"
							link
							width={80}
						/>
					</div>
				</div>
			</div>
		);
	}
}
