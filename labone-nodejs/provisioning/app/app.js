//Load the express module
var express = require('express');
var app = express();

//Respond to requests for / with 'Hello world'
app.get('/', function(req, res) {
  res.send('Hello World!');
});

//Listen on port 3000
app.listen(3000, function() {
  console.log('Express server started successfully.');
});
