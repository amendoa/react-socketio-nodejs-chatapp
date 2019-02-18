import React, {
	Component
} from 'react';

export default class ContentEditableComponent extends Component {
	constructor(props) {
		super(props);
		this.contentEditable = React.createRef();
	}

	handleKeyDown = (event) => {
		if (event.which === 13 && event.shiftKey === false) {
			event.preventDefault();
			this.handleEnter();
			return false;
		}

		return true;
	};

	handleEnter = () => {
		const {
			onEnter
		} = this.props;

		onEnter(this.contentEditable.current.textContent);
		this.contentEditable.current.textContent = '';
	}

	render () {
		const {
			onFocus
		} = this.props;

		return (
			<div
				contentEditable
				className='content-editable'
				role='button'
				spellCheck
				ref={this.contentEditable}
				onKeyDown={this.handleKeyDown}
				onFocus={onFocus}
				tabIndex='-1'
			>
			</div>
		);
	}
}
