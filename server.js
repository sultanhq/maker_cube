var express = require('express'),
  app = express(app),
  server = require('http').createServer(app),
  io = require('socket.io')(server);

app.use(express.static('site'));

server.listen(8000, '0.0.0.0', function() {
  console.log('listening on *:8000');
});

var pong =  io.of('/pong');
  pong.on('connection', function(socket) {

  console.log('a user connected ' + socket.id);

  socket.on('disconnect', function() {
    console.log('user disconnected' + socket.id);
    id = (socket.id).slice(6);
    pong.emit('disconnect', id);
  });

  socket.on('join', function(data) {
    pong.emit('join', data)
  });

  socket.on('check', function(data) {
    pong.emit('check', data)
  });

  socket.on('spaces', function(data) {
    pong.emit('spaces', data)
  });

  socket.on('available', function(msg) {
    pong.emit('available', msg);
  });

  socket.on('Lcontrol message', function(msg) {
    pong.emit('Lcontrol message', msg);
  });

  socket.on('Rcontrol message', function(msg) {
    pong.emit('Rcontrol message', msg);
  });

  socket.on('score', function(msg) {
    pong.emit('score', msg);
  });

  socket.on('winner', function(msg) {
    pong.emit('winner', msg);
  });

  socket.on('newGame', function(msg) {
    pong.emit('newGame', msg);
  });

});

var cube = io.of('/cube');

cube.on('connection', function(socket) {

});
