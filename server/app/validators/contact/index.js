const { check } = require('express-validator/check');
const constants = absoluteRequire('modules/constants');
const {
	findOneUser
} = absoluteRequire('repositories/user');

module.exports.addContactValidator = () => [
	check('nickname')
		.custom((contactUserNickname, { req }) => {
			const {
				nickname
			} = req.currentUser;

			if (contactUserNickname.toLowerCase() === nickname.toLowerCase()) {
				return false;
			}

			return true;
		})
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.YOU_CANT_ADD_YOURSELF)
		.custom(async (contactUserNickname) => {
			try {
				const result = await findOneUser({
					nickname: contactUserNickname.toLowerCase()
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
							contactUserNickname: contactUserNickname.toLowerCase()
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
