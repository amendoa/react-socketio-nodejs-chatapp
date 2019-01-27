const express = require('express');
const authController = absoluteRequire('controllers/auth');
const {
	signupValidator
} = absoluteRequire('validators/auth');

const {
	Router
} = express;

const route = Router();

route.post('/auth/signup', signupValidator(), authController.postSignup);
route.get('/auth/verify-nickname', authController.getVerifyNickname);

module.exports = route;
