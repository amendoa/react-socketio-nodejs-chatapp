import React, {
	Component
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formActions from 'redux/actions/form';
import _ from 'lodash';

class FormComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			handleChange: this.handleChange,
			handleFocus: this.handleFocus,
			handleBlur: this.handleBlur,
			handleSubmit: this.handleSubmit,
			debounces: this.createDebounces()
		};
	}

	componentDidMount () {
		const {
			formActions,
			values,
			formName
		} = this.props;

		formActions.initForm(formName, {
			values,
			errors: {},
			touched: {}
		});
	}

	createDebounces = () => {
		const debounces = {};
		const {
			debounceValidation
		} = this.props;

		_.mapKeys(debounceValidation, (value, key) => {
			debounces[key] = _.debounce(this.handleDebounceValidation, value);
		});

		return debounces;
	}

	handleDebounceValidation = (key, value) => {
		const formData = this.getFormData();
		const {
			errors
		} = formData;
		const {
			validateAsync
		} = this.props;
		const {
			formName
		} = this.props;

		if (!errors[key]) {
			validateAsync(key, value, formName);
			this.validateForm(true, [key]);
		}
	}

	getFormData = () => {
		const {
			formData,
			formName
		} = this.props;

		return formData[formName];
	}

	updateFormData = (params) => {
		const {
			formActions,
			formName
		} = this.props;

		formActions.updateForm(formName, {
			...params
		});
	};

	validateForm = (resetErrors, keys) => {
		const formData = this.getFormData();

		const {
			validate
		} = this.props;

		const {
			values,
			errors
		} = formData;

		this.updateFormData({
			errors: validate ? validate(values, errors, resetErrors, keys) : {}
		});
	}

	setTouched = (keys) => {
		const formData = this.getFormData();
		const {
			touched
		} = formData;

		keys.forEach(key => {
			touched[key] = true;
		});

		this.updateFormData({
			touched
		});
	}

	getMyFormParams = () => {
		const myFormParams = this.getFormData() || {
			values: {},
			errors: {},
			touched: {}
		};

		return myFormParams;
	}

	handleChange = (event) => {
		event.preventDefault();

		const {
			name: key,
			value
		} = event.target;

		const {
			debounces
		} = this.state;

		const formData = this.getFormData();
		const debounce = debounces[key];
		const {
			values
		} = formData;

		values[key] = value;

		this.updateFormData({
			values
		});
		this.setTouched([key]);
		this.validateForm(true, [key]);

		if (debounce) {
			debounce(key, value);
		}
	};

	handleFocus = (event) => {
		event.preventDefault();
		const {
			name: key,
		} = event.target;

		this.validateForm(false, [key]);
	};

	handleBlur = (event) => {
		event.preventDefault();

		const {
			name: key,
		} = event.target;

		this.setTouched([key]);
		this.validateForm(false, [key]);
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const formData = this.getFormData();
		const {
			values,
			errors
		} = formData;

		const {
			handleSubmit,
			formName
		} = this.props;

		this.validateForm(false, _.keys(values));
		this.setTouched(_.keys(values));

		if (_.isEmpty(errors)) {
			handleSubmit(values, formName);
		}
	};

	render () {
		const myFormParams = this.getMyFormParams();

		const {
			render
		} = this.props;

		return (
			<div>
				{
					render({ ...this.state, form: { ...myFormParams } })
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		formData: state.form
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		formActions: bindActionCreators(formActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FormComponent);
