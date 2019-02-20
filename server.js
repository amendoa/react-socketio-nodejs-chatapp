var express = require('express');
var app = express();
const http = require('http');

const server = http.createServer(app);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

app.use('/', (req, res) => {
  res.status(200).json({success: true});
});

module.exports = app;