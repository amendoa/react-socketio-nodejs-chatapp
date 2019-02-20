const {
	ContactSchema
} = absoluteRequire('models/contact');

const mongoose = require('mongoose');

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
		required: true,
		lowercase: true
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
		{
			type: ContactSchema
		}
	]
});

const UserModel = new Model('User', UserSchema);

exports.UserModel = UserModel;
exports.UserSchema = UserSchema;
