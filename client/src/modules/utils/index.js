export function isDevelopmentEnv () {
	return process.env.NODE_ENV.toLowerCase() === 'development';
}
