import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
	AppContainer
} from 'shared/containers';

// import BacklogEntry from 'entries/backlog';

export function getRoutes () {
	return (
		<div
			className='route-wrapper'
		>
			<Route component={AppContainer} />

		</div>
	);
}

// <Switch>
// 	<Route
// 		path='/'
// 		component={BacklogEntry}
// 	/>
// </Switch>
