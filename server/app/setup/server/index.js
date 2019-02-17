const http = require('http');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const socketIO = require('socket.io');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressValidator = require('express-validator');
const logger = absoluteRequire('modules/winston');
const constants = absoluteRequire('modules/constants');
const expressRoutes = absoluteRequire('routes');
const userRepository = absoluteRequire('repositories/user');

module.exports = (app) => {
	const server = http.createServer(app);
	const port = process.env.PORT || constants.GENERAL.SERVER_HTTP_PORT;
	global.io = socketIO.listen(server);

	app.use(expressValidator());
	app.use(compression());
	app.use(helmet());
	app.use(cors());
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	// TODO REMOVE
	// app.use(function(req,res,next){setTimeout(next,1000)});

	expressRoutes(app);

	// HTTP SERVER
	server.listen(port, constants.GENERAL.SERVER_HTTP_IP, () => {
		logger.info(`HTTP Server: Listering on ${constants.GENERAL.SERVER_HTTP_IP}:${port}`);
	});

	// SOCKET.IO SERVER
	global.io.httpServer.on('listening', () => {
		logger.info(`SOCKET.IO Server: Listering on ${constants.GENERAL.SERVER_HTTP_IP}:${port}`);
	});

	global.io.on('connection', (socket) => {
		logger.info('SOCKET.IO Server: New client');

		socket.on('login', (params) => {
			const {
				token
			} = params;

			jwt.verify(token, constants.GENERAL.JWT_SECRET, async (err, decodedData) => {
				if (err) {
					logger.error('SOCKET.IO Server: Invalid login token');
					socket.emit('login-error');
				} else {
					const {
						nickname,
						_id
					} = decodedData;

					try {
						const user = await userRepository.findOneUser({
							nickname,
							_id
						});

						if (user) {
							socket.join(`${_id}`);
						} else {
							socket.emit('login-error');
						}
					} catch (e) {
						socket.emit('login-error');
					}
				}
			});
		});

		socket.once('disconnect', () => {
			logger.info('SOCKET.IO Server: Client disconnected');
		});
	});

	return server;
};
