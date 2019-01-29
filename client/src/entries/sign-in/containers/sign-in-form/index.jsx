import React, {
	Component
} from 'react';
import {
	ButtonComponent,
	InputComponent,
	FormComponent,
	FlashMessageComponent
} from 'shared/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import constants from 'modules/constants';
import * as authActions from 'actions/auth';
import {
	serverErrorsToFrontFormat
} from 'modules/utils';

class SignInFormContainer extends Component {
	onCloseFlashMessage = () => {
		const {
			authActions
		} = this.props;

		const {
			resetSignIn
		} = authActions;

		resetSignIn();
	}

	render () {
		const {
			authActions,
			authData
		} = this.props;

		const {
			postSignIn
		} = authActions;

		const {
			signIn
		} = authData;

		const errors = serverErrorsToFrontFormat(signIn.errors);

		return (
			<FormComponent
				formName='SignInForm'
				values={{
					nickname: '',
					password: ''
				}}
				handleSubmit={(values) => {
					const params = {
						body: values
					};

					if (!signIn.isFetching) {
						postSignIn(params);
					}
				}}
				render={({
					handleChange,
					handleSubmit,
					form
				}) => {
					return (
						<form onSubmit={handleSubmit}>
							{
								errors.nickname ? (
									<FlashMessageComponent
										width={280}
										message={errors.nickname}
										onClose={this.onCloseFlashMessage}
									/>
								) : null
							}
							<InputComponent
								id='nickname'
								placeholder={constants.LABELS.AUTH.NICKNAME}
								type='text'
								autoComplete='off'
								onChange={handleChange}
								marginTop={13}
								maxLength={15}
								marginBottom={13}
								width={280}
							/>
							<InputComponent
								id='password'
								placeholder={constants.LABELS.AUTH.PASSWORD}
								type='password'
								autoComplete='off'
								onChange={handleChange}
								maxLength={15}
								marginTop={13}
								marginBottom={13}
								width={280}
							/>
							<ButtonComponent
								type="submit"
								primary
								text={constants.LABELS.AUTH.SIGNUP}
								isFetching={signIn.isFetching}
								marginTop={24}
								width={280}
							/>
						</form>
					);
				}}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authData: state.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authActions: bindActionCreators(authActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignInFormContainer);
