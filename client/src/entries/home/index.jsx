import React, {
	Component
} from 'react';
import {
	Redirect
} from 'react-router-dom';

export default class HomeEntry extends Component {
	render () {
		console.log('render')
		return (
			<Redirect
				to={'signin'}
			/>
		)

		return (
			<div>
				{
					'teste'
				}
			</div>
		);
	}
}
