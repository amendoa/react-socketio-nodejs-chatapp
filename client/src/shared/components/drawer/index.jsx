import React, {
	Component
} from 'react';
import classNames from 'classnames';

export default class DrawerComponent extends Component {
	render () {
		const {
			isOpen,
			children
		} = this.props;

		const drawerStyles = classNames({
			drawer: true,
			open: isOpen
		});

		return (
			<div className={drawerStyles}>
				{
					children
				}
			</div>
		);
	}
}
