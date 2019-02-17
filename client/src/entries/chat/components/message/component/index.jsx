import React, {
	Component
} from 'react';

import {
	LabelComponent,
	DropDownMenuComponent,
	LoadingComponent
} from 'shared/components';

import classNames from 'classnames';
import constants from 'modules/constants';

export default class MessageComponent extends Component {
	constructor (props) {
		super(props);
		this.state = {
			actionDropdownIsOpen: false
		};
	}

	onChangeDropDownActions = (status) => {
		this.setState({
			actionDropdownIsOpen: status
		});
	}

	render () {
		const {
			right,
			left,
			text,
			time,
			handleDelete,
			isFetchingAction
		} = this.props;

		const {
			actionDropdownIsOpen
		} = this.state;

		const messageStyles = classNames({
			message: true,
			fadeIn: true,
			right,
			left
		});

		const actionsContainerStyles = classNames({
			'actions-container': true,
			active: actionDropdownIsOpen
		});

		const labelsParams = {};

		if (right) {
			labelsParams.defaultLabel = true;
		}

		return (
			<div
				className={messageStyles}
			>
				<LabelComponent
					fontSemiBold
					text={text}
					fontSize={13}
					{
					...labelsParams
					}
				/>
				{
					isFetchingAction ? (
						<div
							className='message-footer-container'
						>
							<div
								className='loading-container'
							>
								<LoadingComponent
									type='donut'
									defaultLoading={right}
								/>
							</div>
						</div>
					)
						: (
							<div
								className='message-footer-container'
							>
								<LabelComponent
									fontSemiBold
									text={time}
									fontSize={11}
									{
									...labelsParams
									}
								/>
								<div
									className={actionsContainerStyles}
								>
									<DropDownMenuComponent
										options={
											[
												{
													text: constants.LABELS.CHAT.DELETE_MESSAGE,
													event: handleDelete
												}
											]
										}
										icon={{
											fill: left ? '#b2b2b1' : '#ffffff',
											icon: 'arrow-down',
											width: '100%',
											height: '100%'
										}}
										onChange={this.onChangeDropDownActions}
									/>
								</div>
							</div>
						)
				}
			</div>
		);
	}
}
