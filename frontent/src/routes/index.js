import React from 'react';
import { Route } from 'react-router-dom';
import {
	AppContainer
} from 'shared/containers';

export function getRoutes () {
	return (
		<Route component={AppContainer} />
	);
}
