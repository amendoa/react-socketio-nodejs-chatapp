const {
	check
} = require('express-validator/check');

const {
	findUser
} = absoluteRequire('repositories/user');

const constants = absoluteRequire('modules/constants');

module.exports.signupValidator = () => [
	check('nickname')
		.isLength({ min: 2, max: 12 })
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.NICKNAME_LENGHT_BETWEEN_2_AND_12)
		.custom(nickname => new Promise(async (resolve, reject) => {
			try {
				const user = await findUser({
					nickname: nickname.toLowerCase()
				});

				if (user.length > 0) {
					reject();
				}

				resolve();
			} catch (e) {
				reject();
			}
		}))
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_IS_ALREADY_TAKEN),
	check('password')
		.isLength({ min: 5, max: 12 })
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.PASSWORD_LENGHT_BETWEEN_5_AND_12)
];
