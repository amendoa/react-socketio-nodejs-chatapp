const express = require('express');
const authController = absoluteRequire('controllers/auth');

const {
	Router
} = express;

const route = Router();

route.post('/auth/signup', authController.postSignup);

module.exports = route;
