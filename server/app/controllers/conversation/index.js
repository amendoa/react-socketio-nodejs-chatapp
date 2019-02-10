const {
	getConversations
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
