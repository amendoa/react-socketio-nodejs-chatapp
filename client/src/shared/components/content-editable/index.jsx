import React, {
	Component
} from 'react';

import ContentEditable from 'react-contenteditable';

export default class ContentEditableComponent extends Component {
	constructor(props) {
		super(props);
		this.contentEditable = React.createRef();
		this.state = {
			html: ''
		};
	}

	handleChange = evt => {
		this.setState({
			html: evt.target.value
		});
	};

	handleEnter = () => {
		const {
			html
		} = this.state;

		const {
			onEnter
		} = this.props;

		onEnter(html);

		this.setState({
			html: ''
		});
	}

	render () {
		const {
			html
		} = this.state;

		const {
			onFocus
		} = this.props;

		return (
			<ContentEditable
				className='content-editable'
				innerRef={this.contentEditable}
				html={html}
				disabled={false}
				onChange={this.handleChange}
				tagName='article'
				onKeyDown={(event) => {
					if (event.which === 13 && event.shiftKey === false) {
						event.preventDefault();
						this.handleEnter();
					}
				}}
				onFocus={onFocus}
			/>
		);
	}
}
