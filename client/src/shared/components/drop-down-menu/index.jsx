import React, {
	Component
} from 'react';
import {
	ButtonComponent,
	IconComponent,
	LabelComponent
} from 'shared/components';
import {
	Manager,
	Reference,
	Popper
} from 'react-popper';

import onClickOutside from 'react-onclickoutside';

class DropDownMenuComponent extends Component {
	constructor (props) {
		super(props);

		this.dropDownWrapper = React.createRef();
		this.state = {
			isOpen: false
		};
	}

	handleClickOutside = (event) => {
		const {
			isOpen
		} = this.state;

		if (this.dropDownWrapper.current) {
			if (!this.dropDownWrapper.current.contains(event.target)) {
				if (isOpen) {
					this.changeDropDownStatus(false, false);
				}
			}
		}
	};

	changeDropDownStatus = (toggle, newIsOpen) => {
		const {
			onChange
		} = this.props;

		const {
			isOpen
		} = this.state;

		const isOpenState = toggle ? (!isOpen) : (newIsOpen);

		if (onChange) {
			onChange(isOpenState);
		}

		this.setState({
			isOpen: isOpenState
		});
	}

	render () {
		const {
			isOpen,
		} = this.state;

		const {
			options,
			icon,
			marginButton
		} = this.props;

		return (
			<div
				ref={this.dropDownWrapper}
				className='drop-down-menu-wrapper'
			>
				<Manager>
					<Reference>
						{({ ref }) => (
							<ButtonComponent
								type='button'
								width={icon.width}
								height={icon.height}
								margin={marginButton}
								link
								setRef={ref}
								onClick={() => {
									this.changeDropDownStatus(true);
								}}
							>
								<IconComponent
									{
									...icon
									}
								/>
							</ButtonComponent>
						)}
					</Reference>
					{
						isOpen && (
							<Popper
								placement="bottom-end"
							>
								{({
									ref,
									style,
									placement
								}) => (
									<div
										className='drop-down-menu fadeIn'
										style={style}
										ref={ref}
									>
										<div
											className='drop-down-container'
											data-placement={placement}
										>
											<ul>
												{
													options.map((item, index) => (
														<li key={index}>
															<ButtonComponent
																link
																onClick={() => {
																	this.changeDropDownStatus(false, false);
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
								)}
							</Popper>
						)
					}
				</Manager>
			</div>
		);
	}
}

export default onClickOutside(DropDownMenuComponent);
