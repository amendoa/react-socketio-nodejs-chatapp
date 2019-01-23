import React from 'react';
import {
	Route,
	Switch,
	withRouter
} from 'react-router-dom';

import {
	AppContainer
} from 'shared/containers';

import {
	TransitionGroup,
	CSSTransition
} from 'react-transition-group';

import {
	SignUpEntry,
	SignInEntry
} from 'entries';

function RoutesContainer ({ location }) {
	return (
		<AppContainer>
			<TransitionGroup>
				<CSSTransition
					key={location.key}
					timeout={{ enter: 300, exit: 200 }}
					classNames="fade"
				>
					<section className="route-section">
						<Switch location={location}>
							<Route
								path='/signin'
								component={SignInEntry}
							/>
							<Route
								path='/signup'
								component={SignUpEntry}
							/>
						</Switch>
					</section>
				</CSSTransition>
			</TransitionGroup>
		</AppContainer>
	);
}

export default withRouter(RoutesContainer);
