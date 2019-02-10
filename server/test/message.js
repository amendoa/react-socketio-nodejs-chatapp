// // eslint-disable-next-line
// global.absoluteRequire = name => require(`${__dirname}/../app/${name}`);
//
// const jwt = require('jsonwebtoken');
// const constants = absoluteRequire('modules/constants');
// const logger = absoluteRequire('modules/winston');
//
// const generateToken = () => {
// 	const user = {
// 		nickname: constants.GENERAL.JWT_DEFAULT_USER,
// 		_id: constants.GENERAL.JWT_DEFAULT_ID
// 	};
//
// 	return jwt.sign(user, constants.GENERAL.JWT_SECRET, {
// 		expiresIn: constants.GENERAL.JWTEXPIRES_IN
// 	});
// };
//
// describe('MESSAGE \n', () => {
// 	const token = generateToken();
//
// 	it('ADD MESSAGE - Should return STATUS 200 | SUCCESS FIELD TRUE', (done) => {
// 		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
// 			.post(constants.ENDPOINTS.MESSAGE)
// 			.set('x-access-token', token)
// 			.type('form')
// 			.send({
// 				message: 'fala padilha',
// 				receiverId: '5c605097d740f02a820b9f29'
// 			})
// 			.end((err, res) => {
// 				logger.info('-----------');
// 				logger.info(res.body);
// 				res.should.have.status(200);
// 				res.body.should.have.property('success').eql(true);
// 				done();
// 			});
// 	});
// });
