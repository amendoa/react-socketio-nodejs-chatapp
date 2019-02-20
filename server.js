var express = require('express');
var app = express();
const http = require('http');

var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 

const server = http.createServer(app);

server.listen(server_port, server_ip_address, () => {
  
});

app.use('/', (req, res) => {
  res.status(200).json({success: true, message: 'testeeeeeeeeeeee'});
});


module.exports = app;