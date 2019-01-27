import React, {
	Component
} from 'react';

export default class LoadingComponent extends Component {
	renderSpinner = () => {
		return (
			<div className="spinner">
				<div className="rect1"></div>
				<div className="rect2"></div>
				<div className="rect3"></div>
				<div className="rect4"></div>
			</div>
		);
	}

	renderDunet = () => {
		return (
			<div className="donut"></div>
		);
	}

	render () {
		const {
			type
		} = this.props;

		switch (type) {
			case 'donut':
				return this.renderDunet();

			case 'spinner':
				return this.renderSpinner();

			default:
				return this.renderSpinner();
		}
	}
}
