const userRepository = absoluteRequire('repositories/user');
const randomColor = absoluteRequire('modules/random-color');

exports.postSignup = (req, res) => {
	const {
		body
	} = req;

	userRepository
		.addUser(Object.assign({}, body, {
			profileColor: randomColor()
		}))
		.then(() => {
			res
				.status(200)
				.json({
					success: true
				});
		})
		.catch(() => {
			res
				.status(500)
				.json({
					success: false
				});
		});
};
