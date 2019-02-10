const express = require('express');

const {
	getConversations
} = absoluteRequire('controllers/conversation');

const {
	Router
} = express;

const route = Router();

route.get('/secured/conversation', getConversations);

module.exports = route;
