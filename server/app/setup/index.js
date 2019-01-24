const setupServer = absoluteRequire('setup/server');
const setupMongoose = absoluteRequire('setup/mongoose');

module.exports = (app) => {
	setupServer(app);
	setupMongoose();
};
