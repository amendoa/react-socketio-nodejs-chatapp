import React, {
	Component
} from 'react';
import {
	IconComponent,
	LabelComponent,
	ButtonComponent
} from 'shared/components';
import classNames from 'classnames';

export default class DrawerComponent extends Component {
	render () {
		const {
			isOpen,
			children,
			title,
			handleGoBack
		} = this.props;

		const drawerStyles = classNames({
			drawer: true,
			open: isOpen
		});

		return (
			<div className={drawerStyles}>
				{
					isOpen ? (
						<div className='drawer-container'>
							<header className='header'>
								<ButtonComponent
									type='button'
									width={26}
									height={26}
									link
									onClick={handleGoBack}
								>
									<IconComponent
										fill="#ffffff"
										icon="arrow-left"
										width={26}
										height={26}
									/>
								</ButtonComponent>
								<LabelComponent
									fontSemiBold
									defaultLabel
									text={title}
									fontSize={16}
									margin="0px 0px 3px 15px"
								/>
							</header>
							{
								children
							}
						</div>
					) : null
				}
			</div>
		);
	}
}
