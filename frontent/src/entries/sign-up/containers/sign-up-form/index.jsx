import React, {
	Component
} from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	ButtonComponent,
	InputComponent
} from 'shared/components';

import constants from 'modules/constants';
// import * as participationActions from '../../actions/participation';

class SignUpFormContainer extends Component {
	render () {
		const {
			values,
			touched,
			errors,
			isSubmitting,
			handleChange,
			handleBlur,
			handleSubmit,
			isFetchingPost
		} = this.props;

		return (
			<form
				onSubmit={handleSubmit}
				className='inputs-container'
			>
				<InputComponent
					id='nickname'
					placeholder={constants.LABELS.AUTH.NICKNAME}
					type='text'
					value={values.nickname}
					onChange={handleChange}
					onBlur={handleBlur}
					err={errors.nickname && touched.nickname}
					label={errors.nickname}
					marginTop={7}
					marginBottom={7}
					width={280}
				/>
				<InputComponent
					id='password'
					placeholder={constants.LABELS.AUTH.PASSWORD}
					type='password'
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
					err={errors.password && touched.password}
					label={errors.password}
					marginTop={7}
					marginBottom={7}
					width={280}
				/>
				<InputComponent
					id='confirmpassword'
					placeholder={constants.LABELS.AUTH.CONFIRM_PASSWORD}
					type='confirmpassword'
					value={values.confirmpassword}
					onChange={handleChange}
					onBlur={handleBlur}
					err={errors.confirmpassword && touched.confirmpassword}
					label={errors.confirmpassword}
					marginTop={7}
					marginBottom={7}
					width={280}
				/>
				<ButtonComponent
					type="submit"
					primary
					text={constants.LABELS.AUTH.SIGNUP}
					isFetching={false}
					disabled={false}
					marginTop={35}
					width={280}
				/>
			</form>
		);
	}
}

const formikComponent = withFormik({
	mapPropsToValues: () => ({
		nickname: '',
		password: ''
	}),
	validate: values => {
		const errors = {};

		if (!values.nickname) {
			errors.nickname = constants.LABELS.AUTH.PLEASE_ENTER_YOUR_NICKNAME;
		}

		if (!values.password) {
			errors.password = constants.LABELS.AUTH.PLEASE_ENTER_YOUR_PASSWORD;
		}

		return errors;
	},
	handleSubmit: (values, { props, setSubmitting, resetForm }) => {
		console.log('on submit');

		// const {
		// 	participationActions,
		// 	data
		// } = props;
		//
		// const {
		// 	isFetchingPost
		// } = data;
		//
		// const {
		// 	firstName,
		// 	lastName,
		// 	participation
		// } = values;
		//
		// const body = {
		// 	firstName,
		// 	lastName,
		// 	participation
		// };
		//
		// if (!isFetchingPost) {
		// 	participationActions.requestPostParticipation(body)
		// 		.then((result) => {
		// 			const {
		// 				success,
		// 				errors
		// 			} = result;
		//
		// 			if (success) {
		// 				resetForm();
		// 			} else {
		// 				errors.forEach((error) => {
		// 					toast.error(`${error.param.toUpperCase()}: ${error.msg}`);
		// 				});
		// 			}
		// 		})
		// 		.catch(() => {
		// 			toast.error(constants.MESSAGES.CATCH_ON_REQUEST);
		// 		});
		// }

		setSubmitting(false);
	},
	displayName: 'ParticipationForm'
})(SignUpFormContainer);

export default formikComponent;

// const mapStateToProps = (state) => {
// 	return {
// 		data: state.participations,
// 	};
// };
//
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		participationActions: bindActionCreators(participationActions, dispatch)
// 	};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(formikComponent);