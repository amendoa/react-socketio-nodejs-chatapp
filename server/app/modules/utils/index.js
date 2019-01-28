const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const constants = absoluteRequire('modules/constants');

exports.encryptPassword = password => crypto
	.createHmac(constants.CRYPTO.HASH, constants.CRYPTO.SECRET)
	.update(password)
	.digest(constants.CRYPTO.DIGEST);

exports.createJwtToken = model => jwt.sign(model, constants.GENERAL.JWT_SECRET, {
	expiresIn: constants.GENERAL.JWTEXPIRES_IN
});
