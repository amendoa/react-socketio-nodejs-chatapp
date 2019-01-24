import React, {
	Component
} from 'react';

export default class AuthContainer extends Component {
	render () {
		const {
			title,
			formContainer,
			footerInfo,
			footerInfoLink
		} = this.props;

		return (
			<section className="auth-wrapper">
				<div className="form-container">
					<h1
						className="title"
					>
						{
							title
						}
					</h1>
					{
						formContainer
					}
					<div className="info-container">
						{
							footerInfo
						}
						{
							footerInfoLink
						}
					</div>
				</div>
			</section>
		);
	}
}
