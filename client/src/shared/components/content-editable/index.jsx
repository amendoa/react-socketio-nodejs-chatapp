import React, {
	Component
} from 'react';

export default class ContentEditableComponent extends Component {
	constructor(props) {
		super(props);
		this.contentEditable = React.createRef();
	}

	componentDidUpdate () {
		const {
			value
		} = this.props;

		this.contentEditable.current.innerHTML = value;
	}

	render () {
		const {
			onEnter,
			onFocus
		} = this.props;

		return (
			<div
				ref={this.contentEditable}
				role='button'
				tabIndex='-1'
				className='content-editable'
				contentEditable='true'
				onKeyDown={(event) => {
					if (event.which === 13 && event.shiftKey === false) {
						event.preventDefault();
						onEnter(this.contentEditable.current.innerHTML);
					}
				}}
				onFocus={onFocus}
			>
			</div>
		);
	}
}
