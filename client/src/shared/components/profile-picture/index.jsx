import React, {
	Component
} from 'react';
import classNames from 'classnames';

export default class ProfilePictureComponent extends Component {
	render () {
		const {
			color,
			backgroundColor,
			label,
			width,
			height
		} = this.props;

		const profilePictureStyles = classNames({
			'profile-picture': true
		});

		return (
			<div
				className={profilePictureStyles}
				style={{
					backgroundColor,
					color,
					width,
					height
				}}
			>
				<span className='label'>
					{
						label
					}
				</span>
			</div>
		);
	}
}
