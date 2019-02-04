import React, {
	Component
} from 'react';

export default class ContentEditableComponent extends Component {
	render () {
		return (
			<div
				className='content-editable'
				contentEditable='true'
			>
			</div>
		);
	}
}
