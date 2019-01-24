// eslint-disable-next-line
global.absoluteRequire = name => require(`${__dirname}/../app/${name}`);

const jwt = require('jsonwebtoken');
const constants = absoluteRequire('modules/constants');

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
	//
	// it('GET ALL - Should return \n STATUS 200 \n SUCCESS FIELD TRUE \n RESULT LIST WITH firstName, lastName and participation fields', (done) => {
	// 	request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
	// 		.get(constants.ENDPOINTS.PARTICIPATION)
	// 		.set('x-access-token', token)
	// 		.end((err, res) => {
	// 			res.should.have.status(200);
	// 			res.body.should.have.property('success').eql(true);
	//
	// 			res.body.result.should.be.a('array');
	// 			res.body.result.should.all.have.property('firstName');
	// 			res.body.result.should.all.have.property('lastName');
	// 			res.body.result.should.all.have.property('participation');
	// 			res.body.result.should.all.have.property('color');
	// 			res.body.result.should.all.have.property('id');
	//
	// 			done();
	// 		});
	// });
	//
	it('SIGNUP - Should return \n STATUS 200 \n SUCCESS FIELD TRUE \n and TOKEN', (done) => {
		request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
			.post(constants.ENDPOINTS.AUTH.SIGNUP)
			.set('x-access-token', token)
			.type('form')
			.send({
				nickname: 'amendoa',
				password: 'coxinha123'
			})
			.end((err, res) => {
				console.log(res.body)
				// if (res.status === 200) {
				// 	res.body.should.have.property('success').eql(true);
				//
				// 	res.body.result.should.be.a('array');
				// 	res.body.result.should.all.have.property('firstName');
				// 	res.body.result.should.all.have.property('lastName');
				// 	res.body.result.should.all.have.property('participation');
				// 	res.body.result.should.all.have.property('color');
				// 	res.body.result.should.all.have.property('id');
				// 	res.should.have.status(200);
				// } else if (res.status === 400) {
				// 	res.body.should.have.property('success').eql(false);
				// 	res.should.have.status(400);
				// }

				done();
			});
	});
	//
	// it('DELETE PARTICIPATION - Should return \n STATUS 200 \n SUCCESS FIELD TRUE \n RESULT LIST WITH firstName, lastName and participation fields', (done) => {
	// 	request(`http://${constants.GENERAL.SERVER_HTTP_IP}:${constants.GENERAL.SERVER_HTTP_PORT}`)
	// 		.delete(constants.ENDPOINTS.PARTICIPATION)
	// 		.set('x-access-token', token)
	// 		.type('form')
	// 		.send({
	// 			id: 'bae939f0-0aeb-11e9-be00-076a2761c2b7'
	// 		})
	// 		.end((err, res) => {
	// 			res.should.have.status(200);
	// 			res.body.should.have.property('success').eql(true);
	//
	// 			res.body.result.should.be.a('array');
	// 			res.body.result.should.all.have.property('firstName');
	// 			res.body.result.should.all.have.property('lastName');
	// 			res.body.result.should.all.have.property('participation');
	// 			res.body.result.should.all.have.property('color');
	// 			res.body.result.should.all.have.property('id');
	//
	// 			done();
	// 		});
	// });
});
