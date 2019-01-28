// eslint-disable-next-line
global.absoluteRequire = name => require(`${__dirname}/../app/${name}`);

const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');
const constants = absoluteRequire('modules/constants');
const logger = absoluteRequire('modules/winston');
const queryString = require('querystring');

const generateToken = () => {
	const user = {
		// name: constants.GENERAL.JWT_ADMIN_NAME,
		// username: constants.GENERAL.JWT_ADMIN_USERNAME,
		// password: constants.GENERAL.JWT_ADMIN_PASSWORD
	};

	return jwt.sign(user, constants.GENERAL.JWT_SECRET, {
		expiresIn: constants.GENERAL.JWTEXPIRES_IN
	});
};

describe('AUTH \n', () => {
	const token = generateToken();

	it('SIGNUP - Should return STATUS 200 | SUCCESS FIELD TRUE | TOKEN', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.post(constants.ENDPOINTS.AUTH.SIGNUP)
			.set('x-access-token', token)
			.type('form')
			.send({
				nickname: randomstring.generate({
					length: 12,
					charset: 'alphabetic'
				}),
				password: randomstring.generate({
					length: 12,
					charset: 'alphabetic'
				})
			})
			.end((err, res) => {
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);
				res.body.should.have.property('token');
				done();
			});
	});

	it('SIGNIN - Should return STATUS 200 | SUCCESS FIELD TRUE | TOKEN', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.post(constants.ENDPOINTS.AUTH.SIGNIN)
			.set('x-access-token', token)
			.type('form')
			.send({
				nickname: 'amendoa',
				password: 'coxinha123'
			})
			.end((err, res) => {
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);
				res.body.should.have.property('token');
				done();
			});
	});

	it('SIGNUP - Should return STATUS 400 | SUCCESS FIELD FALSE', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.post(constants.ENDPOINTS.AUTH.SIGNUP)
			.set('x-access-token', token)
			.type('form')
			.send({
				nickname: randomstring.generate({
					length: 17,
					charset: 'alphabetic'
				}),
				password: randomstring.generate({
					length: 17,
					charset: 'alphabetic'
				})
			})
			.end((err, res) => {
				res.should.have.status(400);
				res.body.should.have.property('success').eql(false);

				done();
			});
	});

	it('VERIFY NICKNAME - Should return STATUS 200 | SUCCESS FIELD TRUE', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.get(`${constants.ENDPOINTS.AUTH.VERIFY_NICKNAME}?${queryString.stringify({
				nickname: 'teste'
			})}`)
			.set('x-access-token', token)
			.end((err, res) => {
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);

				done();
			});
	});
});
