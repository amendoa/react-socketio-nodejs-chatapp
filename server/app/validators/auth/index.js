const { check } = require('express-validator/check');
const constants = absoluteRequire('modules/constants');

module.exports.signupValidator = () => [
	check('nickname')
		.isLength({ min: 2, max: 15 })
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.NICKNAME_LENGHT_BETWEEN_2_AND_15),
	check('password')
		.isLength({ min: 5, max: 15 })
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.PASSWORD_LENGHT_BETWEEN_5_AND_15)
];
