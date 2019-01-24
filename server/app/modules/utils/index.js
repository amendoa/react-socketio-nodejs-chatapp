const crypto = require('crypto');
const constants = absoluteRequire('modules/constants');

exports.encryptPassword = password => crypto
	.createHmac(constants.CRYPTO.HASH, constants.CRYPTO.SECRET)
	.update(password)
	.digest(constants.CRYPTO.DIGEST);
