const { check } = require('express-validator/check');
const constants = absoluteRequire('modules/constants');
const userRepository = absoluteRequire('repositories/user');

module.exports.signupValidator = () => [
	check('nickname')
		.isLength({ min: 2, max: 15 })
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.NICKNAME_LENGHT_BETWEEN_2_AND_15)
		.custom(async (nickname) => {
			try {
				const user = await userRepository.findUser({
					nickname: nickname.toLowerCase()
				});

				if (user.length > 0) {
					return false;
				}

				return true;
			} catch (e) {
				return false;
			}
		})
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_IS_ALREADY_TAKEN),
	check('password')
		.isLength({ min: 5, max: 15 })
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.PASSWORD_LENGHT_BETWEEN_5_AND_15)
];
