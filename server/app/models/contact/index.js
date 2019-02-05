const mongoose = require('mongoose');

const {
	Schema
} = mongoose;

const ContactSchema = new Schema({
	contactUserNickname: {
		type: String,
		default: '',
		trim: true,
		unique: true,
		required: true
	}
});

exports.ContactSchema = ContactSchema;
