const jwt = require('jsonwebtoken');
const constants = absoluteRequire('modules/constants');

module.exports = (req, res, next) => {
	const token = (
		req.get('x-access-token')
		|| req.body['x-access-token']
		|| req.query['x-access-token']
		|| req.headers['x-access-token']
		|| null
	);

	if (!token) {
		res.status(401)
			.json({
				success: false,
				errors: [],
				result: []
			});
	}

	jwt.verify(token, constants.GENERAL.JWT_SECRET, (err, decodedData) => {
		if (err) {
			res.status(401)
				.json({
					success: false,
					errors: [],
					result: []
				});
		} else {
			const {
				nickname,
				_id,
			} = decodedData;

			// mongo verify

			next();

			// if (
			// 	name === constants.GENERAL.JWT_ADMIN_NAME
			// 	&& username === constants.GENERAL.JWT_ADMIN_USERNAME
			// 	&& password === constants.GENERAL.JWT_ADMIN_PASSWORD
			// ) {
			// 	next();
			// } else {
			// 	res.status(401)
			// 		.json({
			// 			success: false,
			// 			errors: [],
			// 			result: []
			// 		});
			// }
		}
	});
};
