const moment = require('moment');

const {
	addMessage
} = absoluteRequire('repositories/message');

const {
	findOneConversationAndUpdate,
	getConversation
} = absoluteRequire('repositories/conversation');

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
			userId: receiverId
		}, {
			ownerId: senderId,
			userId: receiverId,
			$addToSet: {
				messages: messageResult._id
			}
		});

		await findOneConversationAndUpdate({
			ownerId: receiverId,
			userId: senderId
		}, {
			ownerId: receiverId,
			userId: senderId,
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
		userId
	} = req.query;

	const {
		_id: ownerId
	} = req.currentUser;

	try {
		const result = await getConversation({
			userId,
			ownerId
		});

		res.status(200)
			.json({
				success: true,
				result: result ? result.messages.map((item) => {
					const {
						dateTime,
						message,
						senderId
					} = item;

					return {
						dateTime,
						message,
						currentUserIsSender: String(senderId) === String(ownerId)
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
