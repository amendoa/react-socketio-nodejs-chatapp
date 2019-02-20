const authRoute = absoluteRequire('routes/auth');
const contactRoute = absoluteRequire('routes/contact');
const messageRoute = absoluteRequire('routes/message');
const defaultRoute = absoluteRequire('routes/default');
const conversationRoute = absoluteRequire('routes/conversation');
const winstonMiddleware = absoluteRequire('middlewares/winston');
const jwtMiddleware = absoluteRequire('middlewares/jwt');

module.exports = (app) => {
	app.use('/', winstonMiddleware);
	app.use('/secured', jwtMiddleware);
	app.use(authRoute);
	app.use(contactRoute);
	app.use(messageRoute);
	app.use(conversationRoute);
	app.use(defaultRoute);
};
