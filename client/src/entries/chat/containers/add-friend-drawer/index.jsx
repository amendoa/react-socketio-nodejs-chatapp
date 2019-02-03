import React, {
	Component
} from 'react';

import {
	InputComponent,
	ButtonComponent,
	FlashMessageComponent
} from 'shared/components';

import constants from 'modules/constants';

export default class AddFriendDrawer extends Component {
	render () {
		return (
			<div className='add-friend-drawer-wrapper'>
				<div
					className='form-container'
				>
					{/* <FlashMessageComponent
						width='100%'
						message='You already added this user'
						margin='0px 0px 15px 0px'
					/> */}
					<InputComponent
						type='text'
						autoComplete='off'
						placeholder={constants.LABELS.AUTH.NICKNAME}
						onChange={() => {}}
						onFocus={() => {}}
						onBlur={() => {}}
						maxLength={15}
						defaultButton
						margin='0px 0px 15px 0px'
					/>
					<ButtonComponent
						type="button"
						primary
						text={constants.LABELS.CHAT.ADD}
						width='100%'
					/>
				</div>
			</div>
		);
	}
}
