import React, {
	Component
} from 'react';
import { ToastContainer } from 'react-toastify';

export default class AppContainer extends Component {
	render () {
		const {
			children
		} = this.props;

		return (
			<div
				className="app-wrapper"
			>
				<ToastContainer
					autoClose={10000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnVisibilityChange
					pauseOnHover
					draggable={false}
					position="top-right"
				/>
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
