import React, {
	Component
} from 'react';

export default class InputText extends Component {
	render () {
		const {
			placeholder,
			width
		} = this.props;

		return (
			<input
				className="input-text"
				type="text"
				placeholder={placeholder}
				style={{ width }}
			/>
		);
	}
}
