const {
	getConversations,
	updateConversation,
	deleteConversation
} = absoluteRequire('controllers/conversation');

const express = require('express');

const {
	Router
} = express;

const route = Router();

route.get('/secured/conversation', getConversations);
route.put('/secured/conversation', updateConversation);
route.delete('/secured/conversation', deleteConversation);

module.exports = route;
