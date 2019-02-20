const {
	getConversations,
	findOneConversationAndUpdate,
	findOneConversationAndDelete,
	getConversation
} = absoluteRequire('repositories/conversation');

const {
	deleteMessages
} = absoluteRequire('repositories/message');

const _ = require('lodash');

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
			partnerId,
			conversation
		} = req.body;

		const {
			_id: ownerId
		} = req.currentUser;

		await findOneConversationAndUpdate({
			ownerId,
			partnerId
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
			partnerId
		} = req.body;

		const {
			_id: ownerId
		} = req.currentUser;

		const ownerConversation = await findOneConversationAndDelete({
			partnerId,
			ownerId
		});

		const partnerConversation = await getConversation({
			partnerId: ownerId,
			ownerId: partnerId
		});

		const ownerMessages = ownerConversation ? ownerConversation.messages.map(
			item => String(item._id)
		) : [];

		const partnerMessages = partnerConversation ? partnerConversation.messages.map(
			item => String(item._id)
		) : [];

		await deleteMessages({
			_id: {
				$in: _.difference(ownerMessages, partnerMessages)
			}
		});

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
