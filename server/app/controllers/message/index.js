const {
	addMessage
} = absoluteRequire('repositories/message');

const {
	findOneConversationAndUpdate
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
		dateTime: new Date()
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
			$addToSet: {
				messages: messageResult._id
			}
		});

		global.io.to(req.body.receiverId).emit('message.new', {
			message: req.body.message
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
