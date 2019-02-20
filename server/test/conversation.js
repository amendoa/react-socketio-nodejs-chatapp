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

describe('CONVERSATION \n', () => {
	const token = generateToken();

	it('GET CONVERSATIONS - Should return STATUS 200 | RESULT FIELD []', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.get(constants.ENDPOINTS.CONVERSATION)
			.set('x-access-token', token)
			.end((err, res) => {
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);

				done();
			});
	});

	it('UPDATE CONVERSATION - Should return STATUS 200 | SUCCESS FIELD TRUE', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.put(constants.ENDPOINTS.CONVERSATION)
			.set('x-access-token', token)
			.send({
				conversation: {
					unreadMessages: 0
				},
				userId: constants.GENERAL.JWT_DEFAULT_USER_FRIEND_ID
			})
			.end((err, res) => {
				logger.info('-----------');
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);
				done();
			});
	});

	it('DELETE CONVERSATION - Should return STATUS 200 | SUCCESS FIELD TRUE', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.delete(constants.ENDPOINTS.CONVERSATION)
			.set('x-access-token', token)
			.send({
				// conversationId: '5c649ef87d1d3aae777e4b20'
				conversationId: 'cc1bb350-305d-11e9-ac7f-d7bbdf274820'
			})
			.end((err, res) => {
				logger.info('-----------');
				logger.info(res.body);
				res.should.have.status(200);
				res.body.should.have.property('success').eql(true);
				done();
			});
	});
});
