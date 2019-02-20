// eslint-disable-next-line
global.absoluteRequire = name => require(`${__dirname}/../app/${name}`);

const jwt = require('jsonwebtoken');
const constants = absoluteRequire('modules/constants');
const logger = absoluteRequire('modules/winston');

const generateToken = () => {
	const user = {
		nickname: constants.GENERAL.JWT_DEFAULT_USER,
		_id: constants.GENERAL.JWT_DEFAULT_ID
	};

	return jwt.sign(user, constants.GENERAL.JWT_SECRET, {
		expiresIn: constants.GENERAL.JWTEXPIRES_IN
	});
};

describe('CONTACT \n', () => {
	const token = generateToken();

	it('ADD CONTACT - Should return STATUS 200 | SUCCESS FIELD TRUE', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.post(constants.ENDPOINTS.CONTACT)
			.set('x-access-token', token)
			.type('form')
			.send({
				nickname: 'orelha'
			})
			.end((err, res) => {
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);
				done();
			});
	});

	it('GET CONTACTS - Should return STATUS 200 | RESULT FIELD []', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.get(constants.ENDPOINTS.CONTACT)
			.set('x-access-token', token)
			.end((err, res) => {
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);

				done();
			});
	});
});
