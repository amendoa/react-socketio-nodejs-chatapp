const winston = require('winston');
const constants = absoluteRequire('modules/constants');


module.exports = winston.createLogger({
	transports: [
		new (winston.transports.Console)({
			colorize: true
		}),
		new winston.transports.File({
			filename: constants.WINSTON.LOGFILE,
			timestamp: true
		})
	],
	// levels: constants.WINSTON.LEVELS,
	// colors: constants.WINSTON.COLORS
});
