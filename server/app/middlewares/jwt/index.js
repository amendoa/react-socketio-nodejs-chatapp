const {
	findOneUser
} = absoluteRequire('repositories/user');

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

	jwt.verify(token, constants.GENERAL.JWT_SECRET, async (err, decodedData) => {
		if (err) {
			res.status(401)
				.json({
					success: false,
					errors: {},
					result: []
				});
		} else {
			const {
				nickname,
			} = decodedData;

			try {
				const user = await findOneUser({
					nickname
				}, {
					password: 0,
					contacts: 0,
					conversations: 0
				});

				if (user) {
					req.currentUser = user;
					next();
				} else {
					res.status(401).json({
						success: false,
						errors: {},
						result: []
					});
				}
			} catch (e) {
				res.status(500)
					.json({
						success: false,
						errors: {},
						result: []
					});
			}
		}
	});
};
