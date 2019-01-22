import React, {
	Component
} from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	SignUpEntry
} from 'entries';

export default class AppContainer extends Component {
	render () {
		return (
			<div
				className="app-wrapper"
			>
				<span className="header-thing" />
				<div
					className="app-container"
				>
					<Switch>
						<Route
							path='/'
							component={SignUpEntry}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}
