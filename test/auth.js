// eslint-disable-next-line
global.absoluteRequire = name => require(`${__dirname}/../app/${name}`);

const randomstring = require('randomstring');
const constants = absoluteRequire('modules/constants');
const logger = absoluteRequire('modules/winston');
const queryString = require('querystring');

describe('AUTH \n', () => {
	it('SIGNUP - Should return STATUS 200 | SUCCESS FIELD TRUE | TOKEN', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.post(constants.ENDPOINTS.AUTH.SIGNUP)
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
			.end((err, res) => {
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);

				done();
			});
	});
});
