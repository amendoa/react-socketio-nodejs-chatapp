import React, {
	Component
} from 'react';

import {
	SketchComponent
} from 'shared/components';

import classNames from 'classnames';

export default class MessageSketch extends Component {
	render () {
		const {
			right,
			left
		} = this.props;

		const messageStyles = classNames({
			message: true,
			fadeIn: true,
			right,
			left
		});

		return (
			<div
				className={messageStyles}
			>
				<SketchComponent
					width={90}
					height={8}
				/>
				<SketchComponent
					width={70}
					height={6}
				/>
			</div>
		);
	}
}
