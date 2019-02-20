const {
	addUser,
	findOneUser,
	findUser
} = absoluteRequire('repositories/user');

const {
	encryptPassword,
	createJwtToken,
	convertErrorToFrontFormat
} = absoluteRequire('modules/utils');

const _ = require('lodash');
const randomColor = absoluteRequire('modules/random-color');
const constants = absoluteRequire('modules/constants');

exports.postSignUp = async (req, res) => {
	const {
		body
	} = req;

	const validationResult = await req.getValidationResult();
	const errors = convertErrorToFrontFormat(validationResult.mapped());

	if (!_.isEmpty(errors)) {
		res
			.status(400)
			.json({
				success: false,
				errors
			});
	} else {
		try {
			const result = await addUser(Object.assign({}, body, {
				profileColor: randomColor()
			}));

			if (result) {
				const token = createJwtToken({
					nickname: result.nickname.toLowerCase(),
					_id: result._id
				});

				const user = await findOneUser(
					{
						_id: result._id
					},
					{
						password: 0,
						contacts: 0
					}
				);

				res
					.status(200)
					.json({
						success: true,
						errors: {},
						token,
						user
					});
			} else {
				res
					.status(500)
					.json({
						success: false,
						errors: {}
					});
			}
		} catch (e) {
			console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
			console.log(e);
			res
				.status(500)
				.json({
					success: false,
					errors: {}
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
		const result = await findOneUser({
			password: encryptPassword(password),
			nickname: nickname.toLowerCase()
		}, {
			password: 0,
			contacts: 0
		});

		if (result) {
			const token = createJwtToken({
				nickname: result.nickname.toLowerCase(),
				_id: result._id
			});

			res
				.status(200)
				.json({
					success: true,
					token,
					user: result,
					errors: {}
				});
		} else {
			res
				.status(400)
				.json({
					success: false,
					errors: {
						nickname: constants.EXPRESS_VALIDATION_MESSAGES.INCORRECT_PASSWORD_OR_USERNAME
					}
				});
		}
	} catch (e) {
		console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
		console.log(e);
		res
			.status(500)
			.json({
				success: false,
				errors: {}
			});
	}
};

exports.getVerifyNickname = async (req, res) => {
	const {
		nickname
	} = req.query;

	try {
		const result = await findUser({
			nickname: nickname.toLowerCase()
		});

		const errors = {};

		if (result.length > 0) {
			errors.nickname = constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_IS_ALREADY_TAKEN;
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
