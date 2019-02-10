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
		unique: true
	},
	userId: {
		type: ObjectId,
		unique: true
	},
	messages: [
		ObjectId
	]
});

ConversationSchema.index({ ownerId: 1, userId: 1 }, { unique: true });

const ConversationModel = new Model('Conversation', ConversationSchema);

exports.ConversationModel = ConversationModel;
exports.ConversationSchema = ConversationSchema;
