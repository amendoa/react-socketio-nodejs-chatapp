const {
	findUser,
	findOneUser,
	findOneUserByIdAndUpdate
} = absoluteRequire('repositories/user');

const {
	convertErrorToFrontFormat
} = absoluteRequire('modules/utils');

const _ = require('lodash');

exports.getContact = async (req, res) => {
	try {
		const {
			_id
		} = req.currentUser;

		const result = await findOneUser(
			{
				_id
			}
		);

		if (result) {
			const users = await findUser({
				_id: {
					$in: result.contacts.map(item => item.contactUserId)
				}
			}, {
				password: false,
				contacts: false
			});

			res.status(200)
				.json({
					success: true,
					result: users
				});
		} else {
			res.status(500)
				.json({
					success: false,
					errors: {}
				});
		}
	} catch (e) {
		res.status(500)
			.json({
				success: false,
				errors: {}
			});
	}
};

exports.postAddContact = async (req, res) => {
	const validationResult = await req.getValidationResult();
	const errors = convertErrorToFrontFormat(validationResult.mapped());

	const {
		nickname: contactUserNickname
	} = req.body;

	const {
		_id: contactOwnerId
	} = req.currentUser;

	if (!_.isEmpty(errors)) {
		res
			.status(400)
			.json({
				success: false,
				errors
			});
	} else {
		try {
			const contactUser = await findOneUser({
				nickname: contactUserNickname
			}, {
				password: 0,
				contacts: 0
			});

			if (contactUser) {
				await findOneUserByIdAndUpdate(contactOwnerId, {
					$addToSet: {
						contacts: {
							contactUserId: contactUser._id
						}
					}
				});
			}

			res.status(200)
				.json({
					success: true,
					errors: {}
				});
		} catch (e) {
			res.status(500)
				.json({
					success: false,
					errors: {}
				});
		}
	}
};

exports.deleteContact = async (req, res) => {
	const {
		contactId
	} = req.body;

	const {
		_id
	} = req.currentUser;

	try {
		await findOneUserByIdAndUpdate(_id, {
			$pull: {
				contacts: {
					contactUserId: contactId
				}
			}
		});

		res.status(200)
			.json({
				success: true
			});
	} catch (e) {
		res.status(500)
			.json({
				success: false,
				errors: {}
			});
	}
};
