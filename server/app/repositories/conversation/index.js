const {
	ConversationModel
} = absoluteRequire('models/conversation');

exports.findOneConversationAndUpdate = (query, model) => ConversationModel.findOneAndUpdate(
	query, model, {
		upsert: true
	}
);
