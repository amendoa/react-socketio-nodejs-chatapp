var express = require('express');
var app = express();

var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
app.use('/', (req, res) => {
  res.status(200).json({success: true});
});

app.listen(server_port, server_ip_address);

module.exports = app;