var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;

io.on('connection', function(socket) {
  socket.on('message', function(data) {
    console.log('client sent a message: ' + data);
  });
});

http.listen(port, function() {
  console.log('server up and running at %s port', port);
});