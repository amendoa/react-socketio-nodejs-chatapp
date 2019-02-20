import React, {
	Component
} from 'react';

import {
	IconComponent,
	LabelComponent,
	ButtonComponent
} from 'shared/components';

import {
	connect
} from 'react-redux';

import {
	bindActionCreators
} from 'redux';

import * as drawerActions from 'redux/actions/drawer';
import classNames from 'classnames';

class DrawerComponent extends Component {
	componentDidMount() {
		const {
			drawerActions,
			drawerName
		} = this.props;

		drawerActions.initDrawer(drawerName);
	}

	handleGoBack = () => {
		const {
			drawerActions,
			drawerName
		} = this.props;

		drawerActions.closeDrawer(drawerName);
	}

	render () {
		const {
			children,
			title,
			drawerData,
			drawerName
		} = this.props;

		const {
			isOpen
		} = drawerData[drawerName] ? drawerData[drawerName] : { isOpen: false };

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
									onClick={this.handleGoBack}
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

const mapStateToProps = (state) => {
	return {
		drawerData: state.drawer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		drawerActions: bindActionCreators(drawerActions, dispatch)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DrawerComponent);
