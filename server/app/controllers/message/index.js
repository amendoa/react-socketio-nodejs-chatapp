const {
	addMessage,
	deleteMessageById
} = absoluteRequire('repositories/message');

const {
	findOneConversationAndUpdate,
	getConversation
} = absoluteRequire('repositories/conversation');

const moment = require('moment');

exports.postMessage = async (req, res) => {
	const {
		message,
		receiverId
	} = req.body;

	const {
		_id: senderId
	} = req.currentUser;

	const model = {
		senderId,
		receiverId,
		message,
		dateTime: moment.utc().toDate()
	};

	try {
		const messageResult = await addMessage(model);

		await findOneConversationAndUpdate({
			ownerId: senderId,
			partnerId: receiverId
		}, {
			ownerId: senderId,
			partnerId: receiverId,
			$addToSet: {
				messages: messageResult._id
			}
		});

		await findOneConversationAndUpdate({
			ownerId: receiverId,
			partnerId: senderId
		}, {
			ownerId: receiverId,
			partnerId: senderId,
			$inc: {
				unreadMessages: 1
			},
			$addToSet: {
				messages: messageResult._id
			}
		});

		global.io.to(receiverId).emit('message.new', {
			message: messageResult,
			sender: req.currentUser
		});

		res.status(200)
			.json({
				success: true,
				result: messageResult
			});
	} catch (e) {
		res.status(500)
			.json({
				success: false
			});
	}
};

exports.getMessages = async (req, res) => {
	const {
		partnerId
	} = req.query;

	const {
		_id: ownerId
	} = req.currentUser;

	try {
		const result = await getConversation({
			partnerId,
			ownerId
		});

		res.status(200)
			.json({
				success: true,
				result: result ? result.messages.map((item) => {
					const {
						dateTime,
						message,
						senderId,
						_id
					} = item;

					return {
						dateTime,
						message,
						currentUserIsSender: String(senderId) === String(ownerId),
						_id
					};
				}) : []
			});
	} catch (e) {
		res.status(500)
			.json({
				success: false
			});
	}
};

exports.deleteMessage = async (req, res) => {
	const {
		messageId,
		partnerId
	} = req.body;

	try {
		const {
			_id: ownerId
		} = req.currentUser;

		await findOneConversationAndUpdate({
			partnerId,
			ownerId
		}, {
			$pull: {
				messages: messageId
			}
		});

		const partnerConversation = await getConversation({
			partnerId: ownerId,
			ownerId: partnerId
		});

		if (partnerConversation) {
			const message = partnerConversation.messages.find(
				item => String(item._id) === String(messageId)
			);

			if (!message) {
				await deleteMessageById(messageId);
			}
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
