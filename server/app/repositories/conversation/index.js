const {
	ConversationModel
} = absoluteRequire('models/conversation');

exports.findOneConversationAndUpdate = (query, model) => ConversationModel.findOneAndUpdate(
	query, model, {
		upsert: true
	}
);

exports.getConversations = (query, options) => ConversationModel
	.find(query, options)
	.populate({
		path: 'messages',
		options: {
			sort: {
				dateTime: -1
			},
			limit: 1
		}
	})
	.populate('ownerId', { password: 0, contacts: 0 })
	.populate('userId', { password: 0, contacts: 0 });

exports.getConversation = (query, options) => ConversationModel
	.findOne(query, options)
	.populate({
		path: 'messages',
		options: {
			sort: {
				dateTime: 1
			}
		}
	})
	.populate('ownerId', { password: 0, contacts: 0 })
	.populate('userId', { password: 0, contacts: 0 });

exports.deleteOneConversation = query => ConversationModel
	.deleteOne(query);
