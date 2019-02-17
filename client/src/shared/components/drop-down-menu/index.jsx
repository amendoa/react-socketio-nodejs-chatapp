import React, {
	Component
} from 'react';
import {
	ButtonComponent,
	IconComponent,
	LabelComponent
} from 'shared/components';
import Dropdown from 'rc-dropdown';
import classNames from 'classnames';

export default class DropDownMenuComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			visible: false
		};
	}

	onVisibleChange = (visible) => {
		const {
			onChange
		} = this.props;

		if (onChange) {
			onChange(visible);
		}

		this.setState({
			visible
		});
	}

	render () {
		const {
			visible,
		} = this.state;

		const {
			options,
			icon,
			marginButton
		} = this.props;

		const dropDownStyles = classNames({
			'drop-down-menu': true,
			visible
		});

		return (
			<Dropdown
				trigger={['click']}
				visible={visible}
				overlay={() => {
					return (
						<div className='drop-down-menu-wrapper'>
							<div className={dropDownStyles}>
								<ul>
									{
										options.map((item, index) => (
											<li key={index}>
												<ButtonComponent
													link
													onClick={() => {
														this.onVisibleChange(false);
														item.event();
													}}
												>
													<LabelComponent
														regular
														dark
														breakWord
														alignCenter
														text={item.text}
														fontSize={14}
													/>
												</ButtonComponent>
											</li>
										))
									}
								</ul>
							</div>
						</div>
					);
				}}
				animation="slide-up"
				onVisibleChange={this.onVisibleChange}
			>
				<ButtonComponent
					type='button'
					width={icon.width}
					height={icon.height}
					margin={marginButton}
					link
				>
					<IconComponent
						{
						...icon
						}
					/>
				</ButtonComponent>
			</Dropdown>
		);
	}
}
