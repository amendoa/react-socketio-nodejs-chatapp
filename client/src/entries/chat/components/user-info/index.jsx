import React, {
	Component
} from 'react';

import {
	SketchComponent,
	ProfilePictureComponent,
	LabelComponent
} from 'shared/components';

import classNames from 'classnames';

export default class UserInfoComponent extends Component {
	render () {
		const {
			isFetching,
			profile,
			title,
			desc,
			column,
			rightLabel,
			wrapperStyle,
			sketchDark
		} = this.props;

		const userInfoContainerStyles = classNames({
			'user-info-container': true,
			column
		});

		if (isFetching) {
			return (
				<div
					className='user-info-wrapper'
					style={wrapperStyle}
				>
					<div className={userInfoContainerStyles}>
						<SketchComponent
							width={profile.width}
							height={profile.height}
							circle
							dark={sketchDark}
						/>
						<div className='labels-container'>
							{
								title ? (
									<SketchComponent
										width={90}
										height={8}
										margin={title.margin}
										dark={sketchDark}
									/>
								) : null
							}

							{
								desc ? (
									<SketchComponent
										width={60}
										height={8}
										margin={desc.margin}
										dark={sketchDark}
									/>
								) : null
							}
						</div>
					</div>
				</div>
			);
		}

		return (
			<div
				className='user-info-wrapper'
				style={wrapperStyle}
			>
				<div className={userInfoContainerStyles}>
					<ProfilePictureComponent
						{
						...profile
						}
					/>
					<div className='labels-container'>
						<LabelComponent
							fontSemiBold
							dark
							breakWord
							{
							...title
							}
						/>
						<LabelComponent
							fontRegular
							dark
							breakWord
							{
							...desc
							}
						/>
					</div>
				</div>
				<div>
					{
						rightLabel ? (
							<LabelComponent
								fontRegular
								text={rightLabel}
								fontSize={13}
								margin="0px 0px 0px 0px"
								width={100}
							/>
						) : null
					}
				</div>
			</div>
		);
	}
}
