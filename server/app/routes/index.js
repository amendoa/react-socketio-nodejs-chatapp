const authRoute = absoluteRequire('routes/auth');
const contactRoute = absoluteRequire('routes/contact');
const messageRoute = absoluteRequire('routes/message');
const winstonMiddleware = absoluteRequire('middlewares/winston');
const jwtMiddleware = absoluteRequire('middlewares/jwt');

module.exports = (app) => {
	app.use('/', winstonMiddleware);
	app.use('/secured', jwtMiddleware);
	app.use(authRoute);
	app.use(contactRoute);
	app.use(messageRoute);
};
