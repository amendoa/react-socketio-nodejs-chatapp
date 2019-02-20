module.exports = () => {
	const colors = [
		'#3abb8f',
		'#dbcb8a',
		'#db928a',
		'#0f5fff'
	];

	return colors[Math.floor(Math.random() * colors.length)];
};
