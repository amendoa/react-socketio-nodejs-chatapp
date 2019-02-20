const mongoose = require('mongoose');
const bluebird = require('bluebird');
const constants = absoluteRequire('modules/constants');
const logger = absoluteRequire('modules/winston');

module.exports = () => {
	const URI = (
		process.env.OPENSHIFT_MONGODB_DB_URL
			|| process.env.MONGO_URL
			|| constants.MONGOOSE.URI
	)
	+ constants.MONGOOSE.DB;

	console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
	console.log(process.env.OPENSHIFT_MONGODB_DB_URL
		|| process.env.MONGO_URL
		|| constants.MONGOOSE.URI);

	const MONGOOSE_OPTIONS = {
		useNewUrlParser: true,
		auto_reconnect: true
	};

	mongoose.Promise = bluebird;
	mongoose.connect(URI, MONGOOSE_OPTIONS);

	mongoose.connection.on('connected', () => {
		logger.info('Mongoose: Started');
	});

	mongoose.connection.on('reconnecting', () => {
		logger.info('Mongoose: Reconnecting');
	});

	mongoose.connection.on('open', () => {
		logger.info('Mongoose: Connection is open');
	});

	mongoose.connection.on('disconnected', () => {
		logger.warn('Mongoose: Disconnected');
	});

	mongoose.connection.on('error', (error) => {
		logger.error(`Mongoose: Erro. ${error}`);
	});
};
