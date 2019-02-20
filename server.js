// eslint-disable-next-line
global.absoluteRequire = name => require(`${__dirname}/app/${name}`);

const express = require('express');
const setupApp = absoluteRequire('setup');
const app = express();

setupApp(app);

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
console.log(process.env.OPENSHIFT_MONGODB_DB_URL);
console.log(process.env.OPENSHIFT_APP_NAME);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

module.exports = app;
