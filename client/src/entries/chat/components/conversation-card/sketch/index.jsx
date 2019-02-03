import React, {
	Component
} from 'react';

import {
	SketchComponent
} from 'shared/components';

export default class ConversationCardSketch extends Component {
	render () {
		return (
			<div
				className='conversation-card'
			>
				<div className='conversation-card--container'>
					<div className='user-info-container'>
						<SketchComponent
							width={40}
							height={40}
							circle
						/>
						<div className='user-info-content'>
							<SketchComponent
								width={90}
								height={10}
								margin='0px 0px 0px 14px'
							/>
							<SketchComponent
								width={70}
								height={10}
								margin='8px 0px 0px 14px'
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
