const mongoose = require('mongoose');

const {
	Schema,
	model
} = mongoose;

const Model = model;

const UserSchema = new Schema({
	nickname: {
		type: String,
		default: '',
		trim: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		default: '',
		trim: true,
		required: true
	},
	profileColor: {
		type: String,
		default: '',
		trim: true,
		required: true
	}
});

const UserModel = new Model('User', UserSchema);

exports.UserModel = UserModel;
exports.UserSchema = UserSchema;
