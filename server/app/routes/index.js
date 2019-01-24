//const participationRoute = require('./participation');
const winstonMiddleware = absoluteRequire('middlewares/winston');
//const jwtMiddleware = require('@middlewares/jwt');

module.exports = (app) => {
	app.use('/', winstonMiddleware);
	// app.use('/', jwtMiddleware);
	//app.use(participationRoute);
};
