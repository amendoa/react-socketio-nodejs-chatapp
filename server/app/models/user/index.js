const mongoose = require('mongoose');
const {
	ContactSchema
} = absoluteRequire('models/contact');

const {
	Schema,
	model: Model
} = mongoose;

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
	},
	contacts: [
		ContactSchema
	]
});

const UserModel = new Model('User', UserSchema);

exports.UserModel = UserModel;
exports.UserSchema = UserSchema;
