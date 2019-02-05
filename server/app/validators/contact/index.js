const { check } = require('express-validator/check');
const constants = absoluteRequire('modules/constants');
const {
	findOneUser
} = absoluteRequire('repositories/user');

module.exports.addContactValidator = () => [
	check('nickname')
		.custom(async (contactUserNickname) => {
			try {
				const result = await findOneUser({
					nickname: contactUserNickname
				});

				if (!result) {
					return false;
				}

				return true;
			} catch (e) {
				return false;
			}
		})
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_DO_NOT_EXISTS)
		.custom(async (contactUserNickname, { req }) => {
			try {
				const {
					_id: contactOwnerId
				} = req.currentUser;

				const result = await findOneUser({
					_id: contactOwnerId,
					contacts: {
						$elemMatch: {
							contactUserNickname
						}
					}
				});

				if (result) {
					if (result.contacts.length > 0) {
						return false;
					}
				}

				return true;
			} catch (e) {
				return false;
			}
		})
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_IS_ALREADY_ADDED)
];
