const mongoose = require('mongoose');
const bluebird = require('bluebird');
const constants = absoluteRequire('modules/constants');
const logger = absoluteRequire('modules/winston');

module.exports = () => {
	const MONGO_HOST = process.env.OPENSHIFT_MONGODB_DB_HOST || constants.MONGOOSE.HOST;
	const MONGO_PORT = process.env.OPENSHIFT_MONGODB_DB_PORT || constants.MONGOOSE.PORT;

	const URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${constants.MONGOOSE.DB}`;

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
