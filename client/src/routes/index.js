import React from 'react';
import {
	Route,
	Switch,
	withRouter,
	Redirect
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
	SignInEntry,
	HomeEntry
} from 'entries';

function RoutesContainer ({ location }) {
	const Workaround = ({ action, children }) => (
		action === 'REPLACE' ? null : children
	);

	return (
		<AppContainer>
			<TransitionGroup
				className="transition-group-container"
			>
				<CSSTransition
					key={location.key}
					timeout={{ enter: 300, exit: 200 }}
					classNames="fade"
				>
					<section className="route-section">
						<Switch location={location}>
							<Route
								exact
								path='/'
								render={props => {
									const {
										history
									} = props;

									return (
										<Workaround action={history.action}>
											<Redirect
												to={{
													pathname: 'signin',
													state: { from: props.location }
												}}
											/>
										</Workaround>
									);
								}}
							/>
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
