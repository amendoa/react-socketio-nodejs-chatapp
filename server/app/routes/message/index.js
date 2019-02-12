const express = require('express');
const {
	getMessages,
	postMessage
} = absoluteRequire('controllers/message');
// const {
// 	addContactValidator
// } = absoluteRequire('validators/contact');

const {
	Router
} = express;

const route = Router();

route.post('/secured/message', postMessage);
route.get('/secured/message', getMessages);

module.exports = route;
