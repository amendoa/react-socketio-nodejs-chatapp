const mongoose = require('mongoose');
const {
	getConversations,
	findOneConversationAndUpdate,
	deleteOneConversation
} = absoluteRequire('repositories/conversation');

exports.getConversations = async (req, res) => {
	try {
		const {
			_id: ownerId
		} = req.currentUser;

		const result = await getConversations({
			ownerId
		});

		res.status(200)
			.json({
				success: true,
				result
			});
	} catch (e) {
		res.status(500)
			.json({
				success: false
			});
	}
};

exports.updateConversation = async (req, res) => {
	try {
		const {
			userId,
			conversation
		} = req.body;

		const {
			_id: ownerId
		} = req.currentUser;

		await findOneConversationAndUpdate({
			ownerId,
			userId
		}, conversation);

		res.status(200)
			.json({
				success: true
			});
	} catch (e) {
		res.status(500)
			.json({
				success: false
			});
	}
};

exports.deleteConversation = async (req, res) => {
	try {
		const {
			conversationId
		} = req.body;

		const conversationIdIsValid = mongoose.Types.ObjectId.isValid(conversationId);

		if (conversationIdIsValid) {
			await deleteOneConversation({
				_id: conversationId
			});
		}

		res.status(200)
			.json({
				success: true
			});
	} catch (e) {
		res.status(500)
			.json({
				success: false
			});
	}
};
