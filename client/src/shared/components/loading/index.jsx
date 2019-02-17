import React, {
	Component
} from 'react';

import classNames from 'classnames';

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

	renderDotnut = () => {
		const {
			defaultLoading
		} = this.props;

		const dotnutStyles = classNames({
			donut: true,
			default: defaultLoading
		});

		return (
			<div
				className={dotnutStyles}
			>
			</div>
		);
	}

	render () {
		const {
			type
		} = this.props;

		switch (type) {
			case 'donut':
				return this.renderDotnut();

			case 'spinner':
				return this.renderSpinner();

			default:
				return this.renderSpinner();
		}
	}
}
