import React, {
	Component
} from 'react';
import {
	ButtonComponent,
	InputComponent,
	FormComponent,
	LoadingComponent,
	IconComponent
} from 'shared/components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import constants from 'modules/constants';
import _ from 'lodash';
import * as authActions from 'redux/actions/auth';

class SignUpFormContainer extends Component {
	render () {
		const {
			authActions,
			authData
		} = this.props;

		const {
			getVerifyNickname,
			postSignUp
		} = authActions;

		const {
			verifyNickname,
			signUp
		} = authData;

		return (
			<FormComponent
				formName='SignUpForm'
				values={{
					nickname: '',
					password: '',
					confirmPassword: ''
				}}
				handleSubmit={(values, formName) => {
					const params = {
						body: values
					};

					postSignUp(params, formName);
				}}
				customErrors={() => {
					const {
						errors
					} = verifyNickname;
					const customErrors = _.uniqBy(errors, model => model.param);
					const formErrors = {};

					customErrors.forEach(item => {
						formErrors[item.param] = item.msg;
					});

					return formErrors;
				}}
				validate={(values, errors, resetErrors, keys) => {
					const {
						confirmPassword,
						nickname,
						password
					} = values;

					const newErrors = errors;

					if (_.includes(keys, 'nickname')) {
						if (resetErrors) {
							delete newErrors.nickname;
						}
						if (!nickname) {
							newErrors.nickname = constants.LABELS.AUTH.PLEASE_ENTER_YOUR_NICKNAME;
						} else if (nickname.length < 2 || nickname.length > 15) {
							newErrors.nickname = constants.LABELS.AUTH.NICKNAME_LENGHT_BETWEEN_2_AND_15;
						}
					}

					if (_.includes(keys, 'password') || _.includes(keys, 'confirmPassword')) {
						if (resetErrors) {
							delete newErrors.password;
							delete newErrors.confirmPassword;
						}

						if (!password) {
							newErrors.password = constants.LABELS.AUTH.PLEASE_ENTER_YOUR_PASSWORD;
						} else if (password.length < 5 || password.length > 15) {
							newErrors.password = constants.LABELS.AUTH.PASSWORD_LENGHT_BETWEEN_5_AND_15;
						} else if (!confirmPassword) {
							newErrors.confirmPassword = constants.LABELS.AUTH.PLEASE_CONFIRM_PASSWORD;
						} else if (confirmPassword !== password) {
							newErrors.confirmPassword = constants.LABELS.AUTH.PASSWORD_DOESNT_MATCH;
						}
					}

					return newErrors;
				}}
				validateAsync={(key, value, formName) => {
					if (key === 'nickname') {
						const params = {
							body: {
								nickname: value
							},
							formName
						};

						getVerifyNickname({
							...params
						});
					}
				}}
				debounceValidation={{
					nickname: 300
				}}
				render={({
					handleChange,
					handleFocus,
					handleBlur,
					handleSubmit,
					form
				}) => {
					const {
						touched,
						errors,
						values
					} = form;

					return (
						<form onSubmit={handleSubmit}>
							<InputComponent
								id='nickname'
								placeholder={constants.LABELS.AUTH.NICKNAME}
								type='text'
								hasError={touched.nickname && errors.nickname}
								errorMessage={errors.nickname}
								autoComplete='off'
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								margin="13px 0px 13px 0px"
								maxLength={15}
								width={280}
								defaultButton
								iconRight
								iconComponent={() => {
									if (values.nickname) {
										if (values.nickname.length > 0) {
											if (verifyNickname.isFetching) {
												return (
													<LoadingComponent
														type='donut'
													/>
												);
											}

											if (verifyNickname.errors.length > 0) {
												return (
													<IconComponent
														fill="#da7079"
														icon="alert"
														width={26}
														height={26}
													/>
												);
											}

											if (!(touched.nickname && errors.nickname)) {
												return (
													<IconComponent
														fill="#55c37c"
														icon="checked"
														width={24}
														height={24}
													/>
												);
											}
										}
									}

									return null;
								}}
							/>
							<InputComponent
								id='password'
								placeholder={constants.LABELS.AUTH.PASSWORD}
								type='password'
								autoComplete='off'
								hasError={touched.password && errors.password}
								errorMessage={errors.password}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								maxLength={15}
								margin="13px 0px 13px 0px"
								width={280}
								defaultButton
							/>
							<InputComponent
								id='confirmPassword'
								placeholder={constants.LABELS.AUTH.CONFIRM_PASSWORD}
								type='password'
								autoComplete='off'
								hasError={touched.confirmPassword && errors.confirmPassword}
								errorMessage={errors.confirmPassword}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								maxLength={15}
								margin="13px 0px 13px 0px"
								width={280}
								defaultButton
							/>
							<ButtonComponent
								type="submit"
								primary
								text={constants.LABELS.AUTH.SIGNUP}
								isFetching={signUp.isFetching}
								disabled={verifyNickname.isFetching}
								margin="24px 0px 0px 0px"
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
)(SignUpFormContainer);
