export function isDevelopmentEnv () {
	return process.env.NODE_ENV.toLowerCase() === 'development';
}

export function serverErrorsToFrontFormat (errors) {
	const normalizedErrors = {};

	errors.forEach(item => {
		normalizedErrors[item.param] = item.msg;
	});

	return normalizedErrors;
}
