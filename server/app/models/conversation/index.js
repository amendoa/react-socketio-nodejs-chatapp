const mongoose = require('mongoose');

const {
	model: Model,
	Schema
} = mongoose;

const {
	ObjectId
} = Schema.Types;

const ConversationSchema = new Schema({
	ownerId: {
		type: ObjectId,
		ref: 'User'
	},
	partnerId: {
		type: ObjectId,
		ref: 'User'
	},
	unreadMessages: {
		type: Number,
		default: 0
	},
	messages: [
		{
			type: ObjectId,
			ref: 'Message'
		}
	]
});

const ConversationModel = new Model('Conversation', ConversationSchema);

exports.ConversationModel = ConversationModel;
exports.ConversationSchema = ConversationSchema;
