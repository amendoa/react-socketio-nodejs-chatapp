const mongoose = require('mongoose');

const {
	model: Model,
	Schema
} = mongoose;

const {
	ObjectId
} = Schema.Types;

const MessageSchema = new Schema({
	senderId: {
		type: ObjectId,
		required: true
	},
	receiverId: {
		type: ObjectId,
		required: true
	},
	message: {
		type: String,
		trim: true,
		default: '',
		required: true
	},
	dateTime: {
		type: Date,
		required: true
	}
});

const MessageModel = new Model('message', MessageSchema);

exports.MessageModel = MessageModel;
exports.MessageSchema = MessageSchema;
