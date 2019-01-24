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
		trim: true
	},
	password: {
		type: String,
		default: '',
		trim: true
	},
	profileColor: {
		type: String,
		default: '',
		trim: true
	}
});

const UserModel = new Model('User', UserSchema);

exports.UserModel = UserModel;
exports.UserSchema = UserSchema;
