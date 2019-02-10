const {
	MessageModel
} = absoluteRequire('models/message');

exports.addMessage = (model) => {
	const message = new MessageModel(model);
	return message.save();
};
