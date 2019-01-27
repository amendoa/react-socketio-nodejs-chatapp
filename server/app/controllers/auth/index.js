const userRepository = absoluteRequire('repositories/user');
const randomColor = absoluteRequire('modules/random-color');
const { validationResult } = require('express-validator/check');
const constants = absoluteRequire('modules/constants');

exports.postSignup = async (req, res) => {
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
				res
					.status(200)
					.json({
						success: true,
						errors: []
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
			// errors.push({
			// 	location: 'body',
			// 	param: 'nickname',
			// 	value: nickname,
			// 	msg: constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_IS_ALREADY_TAKEN
			// });
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
