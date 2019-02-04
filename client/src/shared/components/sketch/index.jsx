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
			circle,
			dark
		} = this.props;

		const sketchStyles = classNames({
			sketch: true,
			circle,
			dark
		});

		return (
			<div className='sketch-wrapper'>
				<div
					className={sketchStyles}
					style={{
						width,
						height,
						margin
					}}
				>
				</div>
			</div>
		);
	}
}
