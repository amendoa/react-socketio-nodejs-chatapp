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

import {
	getToken
} from 'modules/utils';

function RoutesContainer ({ location }) {
	const Workaround = ({ action, children }) => (
		action === 'REPLACE' ? null : children
	);

	const CustomRoute = ({ protectedRoute, component: Component, ...rest }) => {
		return (
			<Route
				{...rest}
				render={props => {
					const {
						history
					} = props;

					const token = getToken();

					if (!token && protectedRoute) {
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
					}

					if (token && !protectedRoute) {
						return (
							<Workaround action={history.action}>
								<Redirect
									to={{
										pathname: '/',
										state: { from: props.location }
									}}
								/>
							</Workaround>
						);
					}

					return (
						<Component {...props} />
					);
				}}
			/>
		);
	};

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
							<CustomRoute
								exact
								path='/'
								component={HomeEntry}
								protectedRoute
							/>
							<CustomRoute
								exact
								path='/signin'
								component={SignInEntry}
							/>
							<CustomRoute
								exact
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
