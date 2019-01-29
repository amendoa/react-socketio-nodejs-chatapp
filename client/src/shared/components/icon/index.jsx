import React, {
	Component
} from 'react';

export default class IconComponent extends Component {
	renderCheckedIcon = () => {
		const {
			fill,
			width,
			height
		} = this.props;

		return (
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width={width}
				height={height}
				viewBox="0 0 78.369 78.369"
			>
				<g>
					<path
						d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704
						c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704
						C78.477,17.894,78.477,18.586,78.049,19.015z"
						fill={fill}
					/>
				</g>
			</svg>
		);
	}

	renderCloseIcon = () => {
		const {
			fill,
			width,
			height
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
			>
				<path
					d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
					fill={fill}
				/>
			</svg>
		);
	}

	renderAlertIcon = () => {
		const {
			fill,
			width,
			height
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
			>
				<path
					d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
					fill={fill}
				/>
			</svg>
		);
	}

	renderMessageText = () => {
		const {
			fill,
			width,
			height
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
			>
				<path
					d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18"
					fill={fill}
				/>
			</svg>
		);
	}

	render () {
		const {
			icon
		} = this.props;

		switch (icon) {
			case 'checked':
				return this.renderCheckedIcon();

			case 'alert':
				return this.renderAlertIcon();

			case 'close':
				return this.renderCloseIcon();

			case 'message-text':
				return this.renderMessageText();

			default:
				return this.renderCheckedIcon();
		}
	}
}
