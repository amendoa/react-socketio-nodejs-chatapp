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
import { findDOMNode, createPortal } from "react-dom";
import classNames from 'classnames';

export default class DropDownMenuComponent extends Component {
	constructor (props) {
		super(props);

		this.state = {
			isOpen: false
		};
	}

	componentDidMount () {
		document.addEventListener('click', this.handleClickOutside);
	}

	componentWillUnmount () {
		document.removeEventListener('click', this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		// eslint-disable-next-line
		const domNode = findDOMNode(this);
		if (!domNode.contains(event.target)) {
			this.changeDropDownStatus(false, false);
		}
	}

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
									className='drop-down-menu-wrapper fadeIn'
									style={style}
									ref={ref}
								>
									<div
										className='drop-down-menu'
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
		);
	}
}
