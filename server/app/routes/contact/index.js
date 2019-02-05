const express = require('express');
const contactController = absoluteRequire('controllers/contact');
const {
	addContactValidator
} = absoluteRequire('validators/contact');

const {
	Router
} = express;

const route = Router();

route.post('/secured/contact', addContactValidator(), contactController.postAddContact);

module.exports = route;
