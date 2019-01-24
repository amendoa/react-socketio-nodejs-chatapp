const authRoute = absoluteRequire('routes/auth');
const winstonMiddleware = absoluteRequire('middlewares/winston');
// const jwtMiddleware = require('@middlewares/jwt');

module.exports = (app) => {
	app.use('/', winstonMiddleware);
	// app.use('/', jwtMiddleware);
	app.use(authRoute);
};
