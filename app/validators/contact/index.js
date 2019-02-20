const {
	check
} = require('express-validator/check');

const {
	findOneUser
} = absoluteRequire('repositories/user');

const constants = absoluteRequire('modules/constants');

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
		.custom(contactUserNickname => new Promise(async (resolve, reject) => {
			try {
				const result = await findOneUser({
					nickname: contactUserNickname.toLowerCase()
				});

				if (!result) {
					reject();
				}

				resolve();
			} catch (e) {
				reject();
			}
		}))
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_DO_NOT_EXISTS)
		.custom((contactUserNickname, { req }) => new Promise(async (resolve, reject) => {
			try {
				const {
					_id: contactOwnerId
				} = req.currentUser;

				const contactUser = await findOneUser({
					nickname: contactUserNickname.toLowerCase()
				});

				const result = await findOneUser({
					_id: contactOwnerId,
					contacts: {
						$elemMatch: {
							contactUserId: contactUser._id
						}
					}
				});

				if (result) {
					if (result.contacts.length > 0) {
						reject();
					}
				}

				resolve();
			} catch (e) {
				reject();
			}
		}))
		.withMessage(constants.EXPRESS_VALIDATION_MESSAGES.THIS_NICKNAME_IS_ALREADY_ADDED)
];
