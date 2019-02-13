import React, {
	Component
} from 'react';

export default class IconComponent extends Component {
	renderCheckedIcon = () => {
		const {
			fill,
			width,
			height,
			margin
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
				className='fadeIn'
				style={{
					margin
				}}
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
			height,
			margin
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
				className='fadeIn'
				style={{
					margin
				}}
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
			height,
			margin
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
				className='fadeIn'
				style={{
					margin
				}}
			>
				<path
					d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
					fill={fill}
				/>
			</svg>
		);
	}

	renderMessageTextIcon = () => {
		const {
			fill,
			width,
			height,
			margin
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
				className='fadeIn'
				style={{
					margin
				}}
			>
				<path
					d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18"
					fill={fill}
				/>
			</svg>
		);
	}

	renderAccountPlusIcon = () => {
		const {
			fill,
			width,
			height,
			margin
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
				className='fadeIn'
				style={{
					margin
				}}
			>
				<path
					d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z"
					fill={fill}
				/>
			</svg>
		);
	}

	renderSearchIcon = () => {
		const {
			fill,
			width,
			height,
			margin
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
				className='fadeIn'
				style={{
					margin
				}}
			>
				<path
					d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
					fill={fill}
				/>
			</svg>
		);
	}

	renderArrowLeftIcon = () => {
		const {
			fill,
			width,
			height,
			margin
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				className='fadeIn'
				viewBox="0 0 24 24"
				style={{
					margin
				}}
			>
				<path
					d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
					fill={fill}
				/>
			</svg>
		);
	}

	renderArrowDownIcon = () => {
		const {
			fill,
			width,
			height,
			margin
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				className='fadeIn'
				viewBox="0 0 24 24"
				style={{
					margin
				}}
			>
				<path
					d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
					fill={fill}
				/>
			</svg>
		);
	}

	renderDotsVerticalIcon = () => {
		const {
			fill,
			width,
			height,
			margin
		} = this.props;

		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				width={width}
				height={height}
				viewBox="0 0 24 24"
				className='fadeIn'
				style={{
					margin
				}}
			>
				<path
					d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
					fill={fill}
				/>
			</svg>
		);
	}

	renderChatEmojiIcon = () => {
		const {
			width,
			height,
			margin
		} = this.props;

		return (
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width={width}
				height={height}
				viewBox='0 0 356.206 356.206'
				margin={margin}
			>
				<g>
					<g>
						<circle
							fill="#dbcd81"
							cx="102.271"
							cy="197.522"
							r="102.271"
						/>
						<circle
							fill="#545556"
							cx="37.347"
							cy="176.268"
							r="12.026"
						/>
						<path
							fill="#545556"
							d="M155.168,176.269c0-6.64,5.387-12.024,12.029-12.024c6.639,0,12.024,5.384,12.024,12.024
							c0,6.643-5.385,12.029-12.024,12.029C160.555,188.297,155.168,182.911,155.168,176.269z"
						/>
						<g>
							<path
								fill="#988441"
								d="M158.788,197.523c0,31.213-25.302,56.518-56.518,56.518c-31.212,0-56.518-25.305-56.518-56.518
								H158.788z"
							/>
						</g>
					</g>
					<g>
						<path
							fill="#dbdbdb"
							d="M269.358,56.412c-47.963,0-86.843,38.881-86.843,86.845c0,21.612,7.914,41.365,20.976,56.562
							c-3.925,11.303-11.171,21.052-20.598,28.048c5.982,2.044,12.394,3.17,19.066,3.17c11.425,0,22.084-3.258,31.118-8.883
							c11.044,5.087,23.325,7.945,36.282,7.945c47.966,0,86.847-38.88,86.847-86.842C356.205,95.293,317.324,56.412,269.358,56.412z"
						/>
						<g>
							<path
								fill="#545556"
								d="M300.421,113.042h-62.127c-2.794,0-5.058-2.265-5.058-5.059s2.265-5.057,5.058-5.057h62.127
								c2.794,0,5.06,2.263,5.06,5.057S303.215,113.042,300.421,113.042z"
							/>
							<path
								fill="#545556"
								d="M319.265,136.558h-99.814c-2.794,0-5.058-2.265-5.058-5.057c0-2.794,2.264-5.06,5.058-5.06h99.814
								c2.794,0,5.059,2.266,5.059,5.06C324.324,134.293,322.06,136.558,319.265,136.558z"
							/>
							<path
								fill="#545556"
								d="M309.637,160.072h-80.554c-2.792,0-5.058-2.266-5.058-5.06c0-2.795,2.266-5.057,5.058-5.057
								h80.554c2.793,0,5.059,2.263,5.059,5.057C314.696,157.805,312.431,160.072,309.637,160.072z"
							/>
							<path
								fill="#545556"
								d="M300.421,183.589h-62.127c-2.794,0-5.058-2.267-5.058-5.062c0-2.793,2.265-5.058,5.058-5.058
								h62.127c2.794,0,5.06,2.265,5.06,5.058C305.481,181.322,303.215,183.589,300.421,183.589z"
							/>
						</g>
					</g>
				</g>
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
				return this.renderMessageTextIcon();

			case 'account-plus':
				return this.renderAccountPlusIcon();

			case 'search':
				return this.renderSearchIcon();

			case 'arrow-left':
				return this.renderArrowLeftIcon();

			case 'arrow-down':
				return this.renderArrowDownIcon();

			case 'dots-vertical':
				return this.renderDotsVerticalIcon();

			case 'chat-emoji':
				return this.renderChatEmojiIcon();

			default:
				return this.renderCheckedIcon();
		}
	}
}
