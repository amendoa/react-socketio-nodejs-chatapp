import React, {
	Component
} from 'react';

import {
	InputComponent,
	ButtonComponent,
	FormComponent,
	FlashMessageComponent
} from 'shared/components';

import constants from 'modules/constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as contactActions from 'redux/actions/contact';

class AddContactDrawer extends Component {
	onCloseFlashMessage = () => {
		const {
			contactActions
		} = this.props;

		const {
			resetAddContact
		} = contactActions;

		resetAddContact();
	}

	render () {
		const {
			contactActions,
			contactData
		} = this.props;

		const {
			addContact
		} = contactData;

		const {
			successMessages
		} = addContact;

		const {
			errors
		} = addContact;

		return (
			<div className='add-contact-drawer-wrapper'>
				<div
					className='form-container'
				>
					<FormComponent
						formName='AddContactForm'
						values={{
							nickname: ''
						}}
						handleSubmit={(values) => {
							if (!addContact.isFetching) {
								const params = {
									body: values
								};

								contactActions.postAddContact(params);
							}
						}}
						render={({
							handleChange,
							handleSubmit,
							form
						}) => {
							const {
								values
							} = form;

							return (
								<form onSubmit={handleSubmit}>
									{
										successMessages.nickname ? (
											<FlashMessageComponent
												width='100%'
												message={successMessages.nickname}
												margin='0px 0px 15px 0px'
												onClose={this.onCloseFlashMessage}
												success
											/>
										) : null
									}
									{
										errors.nickname ? (
											<FlashMessageComponent
												width='100%'
												message={errors.nickname}
												margin='0px 0px 15px 0px'
												onClose={this.onCloseFlashMessage}
												error
											/>
										) : null
									}
									<InputComponent
										name='nickname'
										type='text'
										autoComplete='off'
										placeholder={constants.LABELS.AUTH.NICKNAME}
										onChange={handleChange}
										maxLength={12}
										defaultButton
										margin='0px 0px 15px 0px'
									/>
									<ButtonComponent
										type="submit"
										primary
										text={constants.LABELS.CHAT.ADD}
										width='100%'
										disabled={!values.nickname}
										isFetching={addContact.isFetching}
									/>
								</form>
							);
						}}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		contactData: state.contact
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		contactActions: bindActionCreators(contactActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddContactDrawer);
