const userRepository = absoluteRequire('repositories/user');
const randomColor = absoluteRequire('modules/random-color');
const { validationResult } = require('express-validator/check');

exports.postSignup = (req, res) => {
	const {
		body
	} = req;
	const errors = validationResult(req).array();

	if (errors.length > 0) {
		res
			.status(500)
			.json({
				success: false,
				errors
			});
	} else {
		userRepository
			.addUser(Object.assign({}, body, {
				profileColor: randomColor()
			}))
			.then(() => {
				res
					.status(200)
					.json({
						success: true,
						errors: []
					});
			})
			.catch(() => {
				res
					.status(500)
					.json({
						success: false,
						errors: []
					});
			});
	}
};
