import React, {
	Component
} from 'react';

import {
	IconComponent,
	ButtonComponent
} from 'shared/components';

import classNames from 'classnames';

export default class FlashMessageComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isActive: true
		};
	}

	handleClickClose = () => {
		const {
			onClose
		} = this.props;

		onClose();

		this.setState({
			isActive: false
		});
	}

	render () {
		const {
			width,
			message
		} = this.props;

		const {
			isActive
		} = this.state;

		const flashMessageStyles = classNames({
			'flash-message-wrapper': true,
			closed: !isActive
		});

		return (
			<div
				className={flashMessageStyles}
				style={{
					maxWidth: width
				}}
			>
				<span className='flash-message'>
					{
						message
					}
				</span>
				<div className='button-container'>
					<ButtonComponent
						type='button'
						width={26}
						height={26}
						link
						onClick={this.handleClickClose}
					>
						<IconComponent
							fill="#ffffff"
							icon="close"
							width={26}
							height={26}
						/>
					</ButtonComponent>
				</div>
			</div>
		);
	}
}
