import React, {
	Component
} from 'react';

export default class InputComponent extends Component {
	render () {
		const {
			placeholder,
			width,
			marginTop,
			marginBottom,
			type
		} = this.props;

		return (
			<input
				className="input"
				type={type}
				placeholder={placeholder}
				style={{
					width,
					marginTop,
					marginBottom
				}}
			/>
		);
	}
}
