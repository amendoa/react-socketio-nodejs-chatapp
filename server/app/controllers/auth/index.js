const userRepository = absoluteRequire('repositories/user');
const randomColor = absoluteRequire('modules/random-color');
const { validationResult } = require('express-validator/check');
const constants = absoluteRequire('modules/constants');
const {
	encryptPassword,
	createJwtToken
} = absoluteRequire('modules/utils');

exports.postSignUp = async (req, res) => {
	const {
		body
	} = req;

	const errors = validationResult(req).array();

	if (errors.length > 0) {
		res
			.status(400)
			.json({
				success: false,
				errors
			});
	} else {
		try {
			const result = await userRepository
				.addUser(Object.assign({}, body, {
					profileColor: randomColor()
				}));

			if (result) {
				const token = createJwtToken({
					nickname: result.nickname,
					// eslint-disable-next-line
					_id: result._id
				});

				res
					.status(200)
					.json({
						success: true,
						errors: [],
						token
					});
			} else {
				res
					.status(500)
					.json({
						success: false,
						errors: []
					});
			}
		} catch (e) {
			res
				.status(500)
				.json({
					success: false,
					errors: []
				});
		}
	}
};

exports.postSignIn = async (req, res) => {
	const {
		body
	} = req;

	const {
		password,
		nickname
	} = body;

	try {
		const result = await userRepository.findOneUser({
			password: encryptPassword(password),
			nickname
		});

		if (result) {
			const token = createJwtToken({
				nickname: result.nickname,
				// eslint-disable-next-line
				_id: result._id
			});

			res
				.status(200)
				.json({
					success: true,
					token
				});
		} else {
			res
				.status(400)
				.json({
					success: false
				});
		}
	} catch (e) {
		res
			.status(500)
			.json({
				success: false
			});
	}
};

exports.getVerifyNickname = async (req, res) => {
	const {
		nickname
	} = req.query;

	try {
		const result = await userRepository.findUser({
			nickname
		});

		const errors = [];

		if (result.length > 0) {
			errors.push({
				location: 'body',
				param: 'nickname',
				value: nickname,
				msg: constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_IS_ALREADY_TAKEN
			});
		}

		res.status(200)
			.json({
				success: true,
				errors
			});
	} catch (e) {
		res.status(500)
			.json({
				success: false
			});
	}
};
