import React, {
	Component
} from 'react';
import { ToastContainer } from 'react-toastify';
import {
	IconComponent,
	LabelComponent
} from 'shared/components';
import constants from 'modules/constants';

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
				<div className="app-container">
					<section
						className="logo-container"
					>
						<IconComponent
							fill="#ffffff"
							icon="message-text"
							width={40}
							height={40}
						/>
						<LabelComponent
							text={constants.LABELS.MAIN.APP_NAME}
							defaultLabel
							style={{
								marginLeft: 18,
								fontWeight: 600,
								fontSize: 22
							}}
						/>
					</section>
					<div
						className="app-content"
					>
						{
							children
						}
					</div>
				</div>

			</div>
		);
	}
}
