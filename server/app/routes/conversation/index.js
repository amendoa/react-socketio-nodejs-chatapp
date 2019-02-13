const express = require('express');

const {
	getConversations,
	updateConversation
} = absoluteRequire('controllers/conversation');

const {
	Router
} = express;

const route = Router();

route.get('/secured/conversation', getConversations);
route.put('/secured/conversation', updateConversation);

module.exports = route;
