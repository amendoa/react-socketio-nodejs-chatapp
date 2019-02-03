import React, {
	Component
} from 'react';
import classNames from 'classnames';

export default class SketchComponent extends Component {
	render () {
		const {
			width,
			height,
			margin,
			circle
		} = this.props;

		const sketchStyles = classNames({
			sketch: true,
			circle
		});

		return (
			<div
				className={sketchStyles}
				style={{
					width,
					height,
					margin
				}}
			>
			</div>
		);
	}
}
