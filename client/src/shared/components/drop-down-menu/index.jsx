import ReactDOM from 'react-dom';
import React, {
	Component
} from 'react';
import {
	ButtonComponent,
	IconComponent,
	LabelComponent
} from 'shared/components';

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
		const domNode = ReactDOM.findDOMNode(this);
		if (!domNode.contains(event.target)) {
			this.changeOpenState(false, false);
		}
	}

	changeOpenState = (toggle, newIsOpen) => {
		const {
			isOpen
		} = this.state;

		const {
			onChange
		} = this.props;

		const newIsOpenState = toggle ? (!isOpen) : newIsOpen;

		if (onChange) {
			onChange(newIsOpenState);
		}

		this.setState({
			isOpen: newIsOpenState
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

		const dropDownStyles = classNames({
			'drop-down-menu': true,
			open: isOpen
		});

		return (
			<div className='drop-down-menu-wrapper'>
				<ButtonComponent
					type='button'
					width={icon.width}
					height={icon.height}
					margin={marginButton}
					link
					onClick={() => {
						this.changeOpenState(true);
					}}
				>
					<IconComponent
						{
						...icon
						}
					/>
				</ButtonComponent>
				<div className={dropDownStyles}>
					<ul>
						{
							options.map((item, index) => (
								<li key={index}>
									<ButtonComponent
										link
										onClick={() => {
											this.changeOpenState(false, false);
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
	}
}
