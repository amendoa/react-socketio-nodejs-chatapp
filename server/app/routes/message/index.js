const express = require('express');
const messageController = absoluteRequire('controllers/message');
// const {
// 	addContactValidator
// } = absoluteRequire('validators/contact');

const {
	Router
} = express;

const route = Router();

route.post('/secured/message', messageController.postMessage);

module.exports = route;
