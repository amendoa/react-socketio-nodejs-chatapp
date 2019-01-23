import React, {
	Component
} from 'react';

export default class AppContainer extends Component {
	render () {
		const {
			children
		} = this.props;

		return (
			<div
				className="app-wrapper"
			>
				<span className="header-thing" />
				<div
					className="app-container"
				>
					{
						children
					}
				</div>
			</div>
		);
	}
}
