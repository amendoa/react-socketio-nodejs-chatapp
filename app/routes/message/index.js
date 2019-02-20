const {
	getMessages,
	postMessage,
	deleteMessage
} = absoluteRequire('controllers/message');

const express = require('express');

const {
	Router
} = express;

const route = Router();

route.post('/secured/message', postMessage);
route.get('/secured/message', getMessages);
route.delete('/secured/message', deleteMessage);

module.exports = route;
